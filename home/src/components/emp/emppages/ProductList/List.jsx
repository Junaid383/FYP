import React from 'react';
import { useState } from "react";

import './list.css'
function List() {

    const USERS = [
        { id: 1, name: 'Tomatos', image: "https://thumbs.dreamstime.com/b/isolated-tomato-fresh-cut-tomatoes-white-background-170813842.jpg", price: "1.35", available: "10" },
        { id: 2, name: 'Oninos', image: "https://previews.123rf.com/images/pinkomelet/pinkomelet1709/pinkomelet170900167/86498596-cebolla-fresca-fresca-en-rodajas-y-cebolla-cebolla-aisladas-sobre-fondo-blanco.jpg", price: "1.35", available: "10" },
        { id: 3, name: 'Potatos', image: "https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=", price: "1.35", available: "10" },
        { id: 4, name: 'Apples', image: "https://thumbs.dreamstime.com/b/red-green-apple-white-background-green-red-apples-juicy-isolated-background-red-green-apple-white-152766768.jpg", price: "1.35", available: "10" },
        { id: 5, name: 'Tomaatos', image: "https://thumbs.dreamstime.com/b/isolated-tomato-fresh-cut-tomatoes-white-background-170813842.jpg", price: "1.35", available: "10" },
        { id: 6, name: 'Carrat', image: "https://st4.depositphotos.com/1002351/23155/i/1600/depositphotos_231555940-stock-photo-carrots-leaves-isolated-white-background.jpg", price: "1.35", available: "10" },
        { id: 7, name: 'Banana', image: "https://media.istockphoto.com/photos/banana-bunch-picture-id173242750?k=20&m=173242750&s=612x612&w=0&h=dgXrAP6otDeY5h6fhy-SRmW-2dFOCKx1_hNS1lLWF7Y=", price: "1.35", available: "10" },
        { id: 8, name: 'Apple', image: "https://thumbs.dreamstime.com/b/red-green-apple-white-background-green-red-apples-juicy-isolated-background-red-green-apple-white-152766768.jpg", price: "1.35", available: "10" },
        { id: 9, name: 'Onion', image: "https://previews.123rf.com/images/pinkomelet/pinkomelet1709/pinkomelet170900167/86498596-cebolla-fresca-fresca-en-rodajas-y-cebolla-cebolla-aisladas-sobre-fondo-blanco.jpg", price: "1.35", available: "10" },
    ];

    const [name, setName] = useState('');
    const [foundUsers, setFoundUsers] = useState(USERS);
    
    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = USERS.filter((user) => {
                return user.name.toLowerCase().includes(keyword.toLowerCase());
            });
            setFoundUsers(results);

        } else {
            setFoundUsers(USERS);
        }

        setName(keyword);
    };















    return (
        <div>
            <input className=""
                type="search"
                value={name}
                onChange={filter}
                // className="input"
                placeholder="Filter"
            />



            <div className="user-list">
                {foundUsers && foundUsers.length > 0 ? (
                    foundUsers.map((user) => (
                        <div class="container">
                            <div class="box">
                                <div class="image">
                                    <img src={user.image} />
                                </div>
                                <div class="name_job">{user.name}</div>
                                <p className='price'>$ {user.price}</p>
                                <p className='available'>{user.available} KG Available</p>
                                <div class="btns">
                                    <button className='productAddButton'>Add</button>
                                    <button className='productAddButton'>Remove</button>
                                </div>
                            </div>
                        </div>



                    ))
                ) : (
                    <p>No results found!</p>
                )}
            </div>



















            {/* <div class="container">

                <div class="box">
                    <div class="image">
                        <img src="https://thumbs.dreamstime.com/b/isolated-tomato-fresh-cut-tomatoes-white-background-170813842.jpg" />
                    </div>
                    <div class="name_job">Tomatos</div>
                    <p className='price'>$ 1.35</p>
                    <p className='available'>10 KG Available</p>
                    <div class="btns">
                        <button className='productAddButton'>Add</button>
                        <button className='productAddButton'>Remove</button>
                    </div>
                </div>

                <div class="box">
                    <div class="image">
                        <img src="https://previews.123rf.com/images/pinkomelet/pinkomelet1709/pinkomelet170900167/86498596-cebolla-fresca-fresca-en-rodajas-y-cebolla-cebolla-aisladas-sobre-fondo-blanco.jpg" />
                    </div>
                    <div class="name_job">Onions</div>
                    <p className='price'>$ 2.00</p>
                    <p className='available'>8 KG Available</p>
                    <div class="btns">
                        <button className='productAddButton'>Add</button>
                        <button className='productAddButton'>Remove</button>
                    </div>
                </div>

                <div class="box">
                    <div class="image">
                        <img src="https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=" />
                    </div>
                    <div class="name_job">Tomatos</div>
                    <p className='price'>$ 1.30</p>
                    <p className='available'>12 KG Available</p>
                    <div class="btns">
                        <button className='productAddButton'>Add</button>
                        <button className='productAddButton'>Remove</button>
                    </div>
                </div>

                <div class="box">
                    <div class="image">
                        <img src="https://thumbs.dreamstime.com/b/red-green-apple-white-background-green-red-apples-juicy-isolated-background-red-green-apple-white-152766768.jpg" />

                    </div>
                    <div class="name_job">Apple</div>
                    <p className='price'>$ 2.00</p>
                    <p className='available'>5 KG Available</p>
                    <div class="btns">
                        <button className='productAddButton'>Add</button>
                        <button className='productAddButton'>Remove</button>
                    </div>

                </div>
                <div class="box">
                    <div class="image">
                        <img src="https://thumbs.dreamstime.com/b/isolated-tomato-fresh-cut-tomatoes-white-background-170813842.jpg" />
                    </div>
                    <div class="name_job">Tomatos</div>
                    <p className='price'>$ 1.35</p>
                    <p className='available'>10 KG Available</p>
                    <div class="btns">
                        <button className='productAddButton'>Add</button>
                        <button className='productAddButton'>Remove</button>
                    </div>
                </div>

            </div>


            <div class="container">
                <div class="box">
                    <div class="image">
                        <img src="https://static9.depositphotos.com/1642482/1149/i/600/depositphotos_11490801-stock-photo-oranges-fruit.jpg" />
                    </div>
                    <div class="name_job">Oranges</div>
                    <p className='price'>$ 2.35</p>
                    <p className='available'>20 KG Available</p>
                    <div class="btns">
                        <button className='productAddButton'>Add</button>
                        <button className='productAddButton'>Remove</button>
                    </div>
                </div>


                <div class="box">
                    <div class="image">
                        <img src="https://media.istockphoto.com/photos/banana-bunch-picture-id173242750?k=20&m=173242750&s=612x612&w=0&h=dgXrAP6otDeY5h6fhy-SRmW-2dFOCKx1_hNS1lLWF7Y=" />
                    </div>
                    <div class="name_job">Bananas</div>
                    <p className='price'>$ 1.85</p>
                    <p className='available'>9 KG Available</p>
                    <div class="btns">
                        <button className='productAddButton'>Add</button>
                        <button className='productAddButton'>Remove</button>
                    </div>
                </div>

                <div class="box">
                    <div class="image">
                        <img src="https://st4.depositphotos.com/1002351/23155/i/1600/depositphotos_231555940-stock-photo-carrots-leaves-isolated-white-background.jpg" />
                    </div>
                    <div class="name_job">Carrat</div>
                    <p className='price'>$ 1.15</p>
                    <p className='available'>5 KG Available</p>
                    <div class="btns">
                        <button className='productAddButton'>Add</button>
                        <button className='productAddButton'>Remove</button>
                    </div>
                </div>


                <div class="box">
                    <div class="image">
                        <img src="https://www.pngitem.com/pimgs/m/553-5532693_single-grocery-items-hd-png-download.png" />
                    </div>
                    <div class="name_job">Butter</div>
                    <p className='price'>$ 2.00</p>
                    <p className='available'>10 KG Available</p>
                    <div class="btns">
                        <button className='productAddButton'>Add</button>
                        <button className='productAddButton'>Remove</button>
                    </div>
                </div>
            </div>

            <div class="container">

                <div class="box">
                    <div class="image">
                        <img src="https://thumbs.dreamstime.com/b/isolated-tomato-fresh-cut-tomatoes-white-background-170813842.jpg" />
                    </div>
                    <div class="name_job">Tomatos</div>
                    <p className='price'>$ 1.35</p>
                    <p className='available'>10 KG Available</p>
                    <div class="btns">
                        <button className='productAddButton'>Add</button>
                        <button className='productAddButton'>Remove</button>
                    </div>
                </div>

                <div class="box">
                    <div class="image">
                        <img src="https://previews.123rf.com/images/pinkomelet/pinkomelet1709/pinkomelet170900167/86498596-cebolla-fresca-fresca-en-rodajas-y-cebolla-cebolla-aisladas-sobre-fondo-blanco.jpg" />
                    </div>
                    <div class="name_job">Onions</div>
                    <p className='price'>$ 2.00</p>
                    <p className='available'>8 KG Available</p>
                    <div class="btns">
                        <button className='productAddButton'>Add</button>
                        <button className='productAddButton'>Remove</button>
                    </div>
                </div>

                <div class="box">
                    <div class="image">
                        <img src="https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=" />
                    </div>
                    <div class="name_job">Tomatos</div>
                    <p className='price'>$ 1.30</p>
                    <p className='available'>12 KG Available</p>
                    <div class="btns">
                        <button className='productAddButton'>Add</button>
                        <button className='productAddButton'>Remove</button>
                    </div>
                </div>

                <div class="box">
                    <div class="image">
                        <img src="https://thumbs.dreamstime.com/b/red-green-apple-white-background-green-red-apples-juicy-isolated-background-red-green-apple-white-152766768.jpg" />

                    </div>
                    <div class="name_job">Apple</div>
                    <p className='price'>$ 2.00</p>
                    <p className='available'>5 KG Available</p>
                    <div class="btns">
                        <button className='productAddButton'>Add</button>
                        <button className='productAddButton'>Remove</button>
                    </div>

                </div>

            </div> */}
        </div>
    )
}

export default List