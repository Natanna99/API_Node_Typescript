"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./server/Server");
Server_1.app.listen(process.env.PORT || 3333, () => console.log(`Server is running on port ${process.env.PORT || 3333}`));
