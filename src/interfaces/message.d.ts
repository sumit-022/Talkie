interface Message {
    message: string;
    mode: "sender" | "receiver";
    time?: string;
}