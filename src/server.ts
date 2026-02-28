import express, { Application, Request, Response } from "express";
import app from "./app";




const bootstrap = () => {
    try{
      // Start the server
      app.listen(5000, () => {
      console.log(`Server is running on http://localhost:5000`);
});
    }catch(error){
      console.log("failed to start server", error);
    }
}

bootstrap();