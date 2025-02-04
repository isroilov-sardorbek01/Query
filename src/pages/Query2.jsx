import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

function Query2() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [succes, setSucces] = useState([]);
    const [err, setErr] = useState([]);
    const [set, setSet] = useState([]);

    const { mutate } = useMutation({
        mutationFn: (user) =>
            axios.post("https://jsonplaceholder.typicode.com/users", user),
        onError: () => {
            console.log("Yemadi");
            setErr((prev) => [...prev, { error: "yemadi" }]);
        },
        onSuccess: () => {
            console.log("Yedi");
            setSucces((prev) => [...prev, { suc: "Yedi" }]);
            setName("");
            setEmail("");
        },
        onSettled: () => {
            console.log("tugadi");
            setSet((prev) => [...prev, { setled: "tugadi" }]);
        },
    });

    function handleSend() {
        const user = {
            name,
            email,
            id: Date(),
        };
        mutate(user);
    }
    return (
        <div>
            <div className="container">
                <div className="card w-[600px] mx-auto mt-10 mb-10 bg-blue-300 p-3 text-center rounded-lg">
                    <h1 className="mb-3 text-[30px] font-bold">Card API</h1>
                    <input
                        className="w-full bg-white outline-none border-[2px] border-white p-2 focus:border-blue-500 rounded-lg mb-3"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        type="text"
                        placeholder="Enter the name"
                    />
                    <input
                        className="w-full bg-white outline-none border-[2px] border-white p-2 focus:border-blue-500 rounded-lg mb-4"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        type="email"
                        placeholder="Enter the email"
                    />
                    <div className="text-center">
                        <button
                            onClick={handleSend}
                            className="px-3 py-1 bg-white rounded-lg transition-all active:scale-90"
                        >
                            SEND
                        </button>
                    </div>
                </div>
                <div className="log w-[600px] rounded-lg mx-auto bg-black text-white p-2">
                    <h1>Console: </h1>
                    <div className="">
                        {err &&
                            err.map((value, index) => {
                                return <li key={index}>{value.error}</li>;
                            })}
                    </div>
                    <div className="">
                        {succes &&
                            succes.map((value, index) => {
                                return <li key={index}>{value.suc}</li>;
                            })}
                    </div>
                    <div className="">
                        {set &&
                            set.map((value, index) => {
                                return <li key={index}>{value.setled}</li>;
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Query2;
