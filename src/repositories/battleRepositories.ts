import axios from "axios";

export default async function getUserInfor (firstUser: string, secondUser: string) {
    let userInfor: object[];

    await axios.get(`api.github.com/users/${firstUser}/repos`)
        .then(response => {
            userInfor.push({stargazers: response.data.stargazers, name: firstUser});
        })
        .catch(error => {
            console.log("error: ", error);
        });

    await axios.get(`api.github.com/users/${secondUser}/repos`)
    .then(response => {
        userInfor.push({stargazers: response.data.stargazers, name: firstUser});
    })
    .catch(error => {
        console.log("error: ", error);
    });

    return userInfor;
};

