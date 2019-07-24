import React, { useState } from "react";

funtion Form() {

    return (
        <div className= "inputting-form">
            <form>
                <label>
                    Name: <input type="text" placeholder="Enter Name Here"/>
                </label>

                <label>
                    Email: <input type="email" placeholder="example: BentleySwizzleton@gmail.com"/>
                </label>

                <label>
                    Role: <input type="text" placeholder="Enter your role here"/>
                </label>
            </form>
        </div>
    )
}