import { defineStore } from "pinia";


export const useTaskStore = defineStore("taskStore", {
    state: () => ({ //the state of the vars
        task1: {
            id: 1,
            name: "GameDev",
            time: "2015/01/01"
        },
        task2: {
            id: 2,
            name: "WebDev",
            time: "2045/5/771"
        },
        games: [
            { name: "Death Stranding" },
            { name: "Death Stranding 2" },
            { name: "Metal Gear Solid V" }
        ]
    }),
    getters: { //getters can be used to get value as is or filter it or alter it in any way
        returnTask1() {
            return this.task1;
        },
        returnTask2() {
            return this.task2;
        },
        returnGames() {
            return this.games;
        },
    },
    actions: {
        addGame(game) {
            this.games.push(game);
            console.log("Added Store");
        },
        deleteLatestGame() {
            this.games.pop();
        },
        deleteGameByName(name) {
            //those elements which are not the name string
            this.games = this.games.filter((game) => {
                console.log("GameName-->", game.name, "Name-->", name.toString());
                if (game.name != name.toString()) {
                    return game;
                }
            });
            console.log(this.games);
            console.log("Game Deleted  !!!");
        },
        async getAsyncTasks() {
            const tasks = await fetch("http://localhost:3000/tasks");
            const data = await tasks.json();

            this.games = data;

            console.log(this.games);
        }
    }
})