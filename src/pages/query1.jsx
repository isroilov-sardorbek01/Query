import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

function Query1() {
    function getUsers() {
        return axios.get(`https://jsonplaceholder.typicode.com/users`);
    }
    const { data, isLoading, isError } = useQuery({
        queryKey: "users",
        queryFn: getUsers,
    });

    return (
        <div className="mt-[60px] mb-[30px]">
            <div className="container">
                {isLoading && (
                    <h1 className="text-center p-10 text-[35px] font-bold">
                        Loading...
                    </h1>
                )}
                {isError && (
                    <h1 className="mx-auto p-10 text-red-500 font-bold text-[35px]">
                        Error with taking information!!
                    </h1>
                )}
                <div className="flex  justify-between gap-3 flex-wrap">
                    {data?.data.length > 0 &&
                        data?.data.map((value, index) => {
                            return (
                                <div
                                    className="bg-blue-300 w-[320px] p-2 rounded-lg"
                                    key={value.id}
                                >
                                    <h1>{value.name}</h1>
                                    <h1>phone: {value.phone}</h1>
                                    <h1>email: {value.email}</h1>
                                    <a
                                        className="hover:underline"
                                        href={value.website}
                                    >
                                        {value.website}
                                    </a>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default Query1;
