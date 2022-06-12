const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const authenticate = require("../middleware/authenticate");
const multer = require("multer");
const { OAuth2Client } = require("google-auth-library");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

//DB connection which is required
require("../database/conn");
//  console.log("DB linked");
const ADMIN = require("../models/adminSchema");
const EMP = require("../models/schema");
const PRD = require("../models/newProduct");
const RECEPITS = require("../models/recepits");
const ORDERS = require("../models/order");
const { response } = require("express");

//===========================================googleLogins
const client = new OAuth2Client(
  "742464243410-jjfqh4gq2ab47i7psqlubh1afvcfaaco.apps.googleusercontent.com"
);

router.get("/", (req, res) => {
  res.send("Hello World From Server auth. js");
});

// ===================================ADMIN Registered===========================
router.post("/admRegister", async (req, res) => {
  const { username, name, email, password, cpassword, phone, address } =
    req.body;
  console.log(req.body);
  if (
    !username ||
    !name ||
    !email ||
    !password ||
    !cpassword ||
    !phone ||
    !address
  ) {
    console.log("Fill all field");
    return res.status(422).json({ error: "Filled All fields" });
  }

  try {
    const admExist = await ADMIN.findOne({ email: email }); //First from DB and 2nd from IP fields to check if same email exist or not

    if (admExist) {
      return res.status(422).json({ error: "Email  exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "PWD Not matched" });
    } else {
      const admin = new ADMIN({
        username,
        name,
        email,
        password,
        cpassword,
        phone,
        address,
      });
      const admReg = await admin.save();
      res.status(201).json({ message: "ADMIN registered" });
    }
  } catch (err) {
    console.log(err);
  }
});
// =====================================ADMIN SIgnIN=============
router.post("/admsignin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Filled all fields" });
    }
    const admLog = await ADMIN.findOne({ email: email });
    // console.log(empLog);

    if (admLog) {
      const isMatch = await bcrypt.compare(password, admLog.password);

      const token = await admLog.generateAuthToken();

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 258920000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credentials" });
      } else {
        res.json({ message: "Logged IN" });
      }
    } else {
      res.status(400).json({ error: "Invalid" });
    }
  } catch (err) {
    console.log(err);
  }
});

// -----------------  ------------------------NEW EMPLOYEE-------------------------------------------------
router.post("/admin/newUser", async (req, res) => {
  const { username, name, email, password, cpassword, phone, address } =
    req.body;
  console.log(req.body);
  if (
    !username ||
    !name ||
    !email ||
    !password ||
    !cpassword ||
    !phone ||
    !address
  ) {
    console.log("Fill all field");
    return res.status(422).json({ error: "Filled All fields" });
  }

  try {
    const empExist = await EMP.findOne({ email: email }); //First from DB and 2nd from IP fields to check if same email exist or not

    if (empExist) {
      return res.status(422).json({ error: "Email  exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "PWD Not matched" });
    } else {
      const emp = new EMP({
        username,
        name,
        email,
        password,
        cpassword,
        phone,
        address,
      });
      const empReg = await emp.save();
      res.status(201).json({ message: "EMP registered" });
    }
  } catch (err) {
    console.log(err);
  }
});
// ------------------------------EMPLOYEE__Login_____________----------------------

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Filled all fields" });
    }
    const empLog = await EMP.findOne({ email: email });
    // console.log(empLog);

    if (empLog) {
      const isMatch = await bcrypt.compare(password, empLog.password);
      console.log(empLog._id);
      const token = await empLog.generateAuthToken();

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 258920000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credentials" });
      } else {
        res.json({ message: "Logged IN", empID: empLog._id });
      }
    } else {
      res.status(400).json({ error: "Invalid" });
    }
  } catch (err) {
    console.log(err);
  }
});

//...................................................ADMIN................................//

router.post("/admin/newProduct", upload.single("image"), async (req, res) => {
  // req.body.image = req.file.path;
  // console.log( req.body);
  const { image, name, stock, price, active, cost, unit, category } = req.body;
  console.log(req.body);
  if (!name || !stock || !price || !cost || !unit || !category) {
    console.log("Fill all field");
    return res.status(422).json({ error: "Filled All fields" });
  }
  if (price < cost) {
    console.log("Sale Price Must be larger");
    return res.status(422).json({ error: "Sale Price Must be larger" });
  }
  try {
    const prdExist = await PRD.findOne({ name: name }); //First from DB and 2nd from IP fields to check if same email exist or not

    if (prdExist) {
      return res.status(422).json({ error: "Product  exist" });
    } else {
      const prd = new PRD({
        image,
        name,
        stock,
        price,
        active,
        cost,
        unit,
        category,
      });
      const prdReg = await prd.save();
      res.status(201).json({ message: "Product Entered" });
    }
  } catch (err) {
    // console.log("err");
    console.log(err);
  }
});

// ==============================================PRODUCTLIST Data GET method ==================================

router.get("/admin/products", (req, res) => {
  PRD.find()
    .sort({ name: 1 })
    .then((prod) => res.json(prod))
    .catch((err) => res.status(400).json("Error : $(err)"));
});

// ============ADMIN RECEPITS===============
router.get("/admin/recepits", (req, res) => {
  RECEPITS.find()
    .sort({ _id: -1 })
    .then((prod) => res.json(prod))
    .catch((err) => res.status(400).json("Error : $(err)"));
});

router.get("/employee/recentrecepits", (req, res) => {
  RECEPITS.find()
    .sort({ _id: -1 })
    .limit(4)
    .then((prod) => res.json(prod))
    .catch((err) => res.status(400).json("Error : $(err)"));
});

router.get("/admin/users", (req, res) => {
  EMP.find()
    .sort({ name: 1 })
    .then((prod) => res.json(prod))
    .catch((err) => res.status(400).json("Error : $(err)"));
});

// router.get("/employee/home", (req, res) => {
//   PRD.find()
//     .then((prod) => res.json(prod))
//     .catch((err) => res.status(400).json("Error : $(err)"));
// });

//==========================EMPLOYEE=============
router.get("employeedata/:userID", (req, res) => {
  let empData = req.body.id;
  EMP.findById(req.body.userID)
    .then((user) => {
      res.json(user); //sending data back to user-line25
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/employee/:userID", (req, res) => {
  PRD.find()
    .sort({ name: 1 })
    .then((prod) => res.json(prod))
    .catch((err) => res.status(400).json("Error : $(err)"));
});
router.get("datafinder/:userID", (req, res) => {
  let empData = req.body.userID;
  EMP.findById(empData)
    .then((user) => {
      // console.log(user);
      res.json(user); //sending data back to user-line25
    })
    .catch((err) => {
      console.log(err);
    });
});

let rpID;
let odrID;
let orderID;
let custmerID;
//===============ORDERS handler===========
router.post("/employee/order", async (req, res) => {
  const { userID, subTotal, discountedAmount } = req.body;
  console.log(req.body);
  orderID = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
  custmerID = (Math.floor(Math.random() * 10000) + 10000)
    .toString()
    .substring(1);

  // console.log(orderID);
  // console.log(custmerID);

  try {
    const loggedIn = await EMP.findOne({ _id: userID });

    const loggedInUserName = loggedIn.name;
    let total = subTotal - discountedAmount;

    if (loggedIn) {
      const order = new ORDERS({
        loggedInUserName,

        subTotal,
        discountedAmount,
        total,
        orderID,
        custmerID,
      });
      // console.log(status);

      const orderReg = await order.save();
      // console.log("Order CREATED");

      odrID = orderReg._id;
      res
        .status(201)
        .json({
          message: "Order Created",
          orderID: orderID,
          empName: orderReg.loggedInUserName,
        });
    } else {
      console.log("RECIPT NOT CREATED");

      return res.status(422).json({ error: "Recipt Not Created" });
    }
  } catch (e) {
    console.log(e);
  }
});

// ==================PRINT recepit========================
router.post("/employee/printreceipt", async (req, res) => {
  // console.log(req.body);
  let ts = Date.now();
  let date_ob = new Date(ts);
  let date = date_ob.getDate();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = monthNames[date_ob.getMonth()];
  let year = date_ob.getFullYear();
  let hours = date_ob.getHours();
  let minutes = date_ob.getMinutes();

  let completeData = date + "-" + month + "-" + year;
  let completeTime = hours + ":" + minutes;
  let status = `APPROVED`;

  const { userID, cartProducts, subTotal, discountedAmount } = req.body;
  try {
    const loggedIn = await EMP.findOne({ _id: userID });

    const loggedInUserName = loggedIn.name;
    const loggedInUserID = loggedIn._id;

    let total = subTotal - discountedAmount;
    // console.log(cartProducts);
    // console.log(loggedInUserName);
    // console.log(subTotal);
    // console.log(discountedAmount);
    // console.log(total);
    // console.log(completeData);
    // console.log(completeTime);

    if (loggedIn) {
      const recpts = new RECEPITS({
        loggedInUserID,
        loggedInUserName,
        cartProducts,
        subTotal,
        discountedAmount,
        total,
        completeData,
        completeTime,
        status,
        orderID,
        custmerID,
      });
      // console.log(status);

      const recptReg = await recpts.save();
      // console.log("RECIPT CREATED");
      // console.log(recptReg.status);
      rpID = recptReg._id;
      res
        .status(201)
        .json({
          message: "Recipt Created",
          recptID: recptReg._id,
          empName: recptReg.loggedInUserName,
        });
    } else {
      console.log("RECIPT NOT CREATED");

      return res.status(422).json({ error: "Recipt Not Created" });
    }
  } catch (e) {
    console.log(e);
  }
});

// =================ADMIN RECIPT DISPLAY=============
router.get("/admin/receiptData", (req, res) => {
  RECEPITS.find()
    .sort({ _id: -1 })
    .limit(6)
    .then((prod) => res.json(prod))
    .catch((err) => res.status(400).json("Error : $(err)"));
});

router.get("/admin/orderData", (req, res) => {
  RECEPITS.find()
    .sort({ _id: -1 })
    .limit(6)
    .then((prod) => res.json(prod))
    .catch((err) => res.status(400).json("Error : $(err)"));
});

router.post("/viewreceipt/:orderID", (req, res) => {
  // console.log(req.body);
  let orderIDbyOrder = req.body.orderID;
  RECEPITS.findById(orderIDbyOrder)
    .then((user) => {
      // console.log(user);
      res.json(user); //sending data back to user-line25
    })
    .catch((err) => {
      console.log(err);
    });

  // RECEPITS.findOne({_id:rpID } )
  // .then((prod) => res.json(prod))
  // .catch((err) => res.status(400).json("Error : $(err)"));
});

//=====================RECEPIT DISPLAY==================
router.get("/printreceipt/", (req, res) => {
  // RECEPITS.find()
  // .then((prod) => res.json(prod))
  // .catch((err) => res.status(400).json("Error : $(err)"));

  RECEPITS.findOne({ _id: rpID })
    .then((prod) => res.json(prod))
    .catch((err) => res.status(400).json("Error : $(err)"));
});

router.get("/order", (req, res) => {
  // RECEPITS.find()
  // .then((prod) => res.json(prod))
  // .catch((err) => res.status(400).json("Error : $(err)"));

  ORDERS.findOne({ _id: odrID })
    .then((odr) => res.json(odr))
    .catch((err) => res.status(400).json("Error : $(err)"));
});

//======================================user delete=================
router.post("/admin/user/delete", async (req, res) => {
  console.log(req.body.id);
  const userID = req.body.id;
  try {
    const delEMP = await EMP.findByIdAndRemove(userID, function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        res.status(201).json({ message: "Removed User", emp: docs });
      }
    });
  } catch (err) {
    console.log(err);
  }
});

// ====================Update User==================
router.post("/admin/user/update", async (req, res) => {
  const { userID, username, name, email, phone, address } = req.body;
  console.log(req.body);

  if (!username || !name || !email || !phone || !address) {
    console.log("Fill all field");
    return res.status(422).json({ error: "Filled All fields" });
  }

  try {
    const empExist = await EMP.findOne({ _id: userID }); //First from DB and 2nd from IP fields to check if same email exist or not

    if (!empExist) {
      return res.status(422).json({ error: "User not exist" });
    } else {
      EMP.findByIdAndUpdate(
        userID,
        {
          username: username,
          name: name,
          email: email,
          phone: phone,
          address: address,
        },
        function (err, doc) {
          if (err) {
            console.log(err);
          } else {
            // console.log("Updated User : ", doc);
          }
        }
      );

      res.status(201).json({ message: "EMP registered" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/admin/user/:userID", (req, res) => {
  //   console.log("Update User Rendered");
  //   console.log(req.body);
  EMP.findById(req.body.userID)
    .then((user) => {
      ``;

      res.json(user); //sending data back to user-line25
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/admin", authenticate, (res, req) => {
  console.log("Welcome to success");
  res.send(req.rootUser);
});

// ==========================Product Update ===============
router.post("/admin/product/update", async (req, res) => {
  const { prodID, name, price, quantity, cost, unit, category } = req.body;
  console.log(req.body);

  if (!name || !price || !quantity || !cost || !unit || !category) {
    console.log("Fill all field");
    return res.status(422).json({ error: "Filled All fields" });
  }
  // console.log("Price:" + price);
  // console.log("COST:" + cost);

  if (price < cost) {
    console.log("Sale Price Must be larger");
    return res.status(422).json({ error: "Sale Price Must be larger" });
  }

  try {
    const prodExist = await PRD.findOne({ _id: prodID }); //First from DB and 2nd from IP fields to check if same email exist or not

    if (!prodExist) {
      return res.status(422).json({ error: "Product not exist" });
    } else {
      PRD.findByIdAndUpdate(
        prodID,
        {
          name: name,
          price: price,
          stock: quantity,
          cost: cost,
          unit: unit,
          category: category,
        },
        function (err, doc) {
          if (err) {
            console.log(err);
          } else {
            // console.log("Updated product : ", doc);
          }
        }
      );

      res.status(201).json({ message: "Product registered" });
    }
  } catch (err) {
    console.log(err);
  }
});

// ===========================PRODUCT delete==============
router.post("/admin/product/delete", async (req, res) => {
  console.log(req.body.id);
  const prodID = req.body.id;
  try {
    const delPRD = await PRD.findByIdAndRemove(prodID, function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        res.status(201).json({ message: "Removed Product", emp: docs });
      }
    });
  } catch (err) {
    console.log(err);
  }
});

router.post("/admin/product/:userID", (req, res) => {
  //   console.log("Update User Rendered");
  //   console.log(req.body);
  PRD.findById(req.body.prodID)
    .then((user) => {
      ``;

      res.json(user); //sending data back to user-line25
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/googlelogin", (req, res) => {
  const { tokenId } = req.body;
  console.log("Loged in");
  client
    .verifyIdToken({
      idToken: tokenId,
      audience:
        "742464243410-jjfqh4gq2ab47i7psqlubh1afvcfaaco.apps.googleusercontent.com",
    })
    .then((response) => {
      const { email_verified, name, email, family_name } = response.payload;
      // console.log(response.payload);
      if (email_verified) {
        EMP.findOne({ email }).exec((err, user) => {
          if (err) {
            return res.status(400).json({
              error: "Someething went wrong...",
            });
          } else {
            if (user) {
              const token = user.generateAuthToken();

              res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 258920000),
                httpOnly: true,
              });
              res.status(201).json({ message: "Email already exis" });
            } else {
              let username = family_name;
              let password = 12345678;
              let cpassword = 12345678;
              let phone = "00000000000";
              let address = "";
              let emp = new EMP({
                username,
                name,
                email,
                password,
                cpassword,
                phone,
                address,
              });
              const empReg = emp.save();
              console.log(emp);
              res.status(201).json({ message: "EMP registered" });
            }
          }
        });
      }
    });
});

module.exports = router;
