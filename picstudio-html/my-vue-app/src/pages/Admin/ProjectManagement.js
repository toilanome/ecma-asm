import { getAll, remove } from "../../api/project"
import { useEffect, useState } from "../../lib"
import axios from 'axios'

const ProjectManagementPage = () => {
    const [projects, setProject] = useState([])
    useEffect(() => {
        // fetch(`http://localhost:3000/projectList`)
        //     .then(res => res.json())
        //     .then(data => setProject(data))

        // axios.get(`http://localhost:3000/projectList`)
        //     .then(({ data }) => setProject(data))

        // axios.get(`http://localhost:3000/users`)
        //     .then(({ data }) => setProject(data))
        getAll().then(({ data }) => setProject(data))

    }, [])

    useEffect(() => {
        const btnList = document.querySelectorAll(".btn-remove")
        for (let btn of btnList) {
            const id = btn.dataset.id
            btn.addEventListener('click', () => {
                // fetch(`http://localhost:3000/projectList/${id}`, {
                //     method: 'DELETE'
                // }).then(() => {
                //     const newProjectList = projects.filter((project) => {
                //         return project.id != id
                //     })
                //     setProject(newProjectList);
                // })

                remove(id).then(() => {
                    const newProjectList = projects.filter((project) => {
                        return project.id != id
                    })
                    setProject(newProjectList);
                })
            })
        }
    })
    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css.css" />
    <title>Document</title>
  </head>
  <body>
            <style>
            html,
            body {
                height: 100%;
            }

            body {
                margin: 0;
                background: linear-gradient(45deg, #49a09d, #5f2c82);
                font-family: sans-serif;
                font-weight: 100;
            }

            .container {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            .buttons{
                display: flex;
                align-items: center;
                font-family: inherit;
                font-weight: 500;
                font-size: 13px;
                padding: 10px;
                color: white;
                background: #ad5389;
                background: linear-gradient(0deg, rgba(77,54,208,1) 0%, rgba(132,116,254,1) 100%);
                border: none;
                box-shadow: 0 0.7em 1.5em -0.5em #4d36d0be;
                letter-spacing: 0.05em;
                border-radius: 20em;
                text-decoration: none;
                cursor :pointer;
            }
            .button:hover{
                box-shadow: 0 0.5em 1.5em -0.5em #4d36d0be;
            }
            .button:active{
                box-shadow: 0 0.3em 1em -0.5em #4d36d0be;
            }
            .btn-remove{
                display: flex;
                align-items: center;
                font-family: inherit;
                font-weight: 500;
                font-size: 13px;
                padding: 10px;
                color: white;
                background: #ad5389;
                background: linear-gradient(0deg, rgba(77,54,208,1) 0%, rgba(132,116,254,1) 100%);
                border: none;
                box-shadow: 0 0.7em 1.5em -0.5em #4d36d0be;
                letter-spacing: 0.05em;
                border-radius: 20em;
                margin-bottom : 10px;
                cursor :pointer;

            }
            .btn-remove:hover{
                box-shadow: 0 0.5em 1.5em -0.5em #4d36d0be;
            }
            .btn-remove:active{
                box-shadow: 0 0.3em 1em -0.5em #4d36d0be;
            }
            table {
                width: 800px;
                border-collapse: collapse;
                overflow: hidden;
                box-shadow: 0 0 20px rgba(0,0,0,0.1);
            }

            th,
            td {
                padding: 15px;
                background-color: rgba(255,255,255,0.2);
                color: #fff;
            }

            th {
                text-align: center;
            }

            thead {
                th {
                    background-color: #55608f;
                }
            }

            tbody {
            tr {
            &:hover {
                background-color: rgba(255,255,255,0.3);
            }
            }
            td {
            position: relative;
            &:hover {
                &:before {
                    content: "";
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: -9999px;
                    bottom: -9999px;
                    background-color: rgba(255,255,255,0.2);
                    z-index: -1;
                }
            }
            }
            }
            h2{
                text-align : center;
                margin-top: 70px;
                color:white;
            }
        </style>
        <div class="container">
        <h2>Trang Chủ </h2>

        <a style="text-decoration:none" href="/admin/project/add">
        <button class="buttons">Add New Project</button>
        </a>

        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Url</th>
                    <th>Repository</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            ${projects.map((project, index) => {
                return `
                            <tr>
                                <td>${index + 1}</td>
                                <td>${project.title}</td>
                                <td>${project.description}</td>
                                <td><img style="width:150px;height:100px;" src="${project.image}"></td>
                                <td>${project.url}</td>
                                <td>${project.repository}</td>
                                <td>
                                    <button class="btn-remove" data-id="${project.id}">Delete</button>
                                    <a style="text-decoration:none;" href="/admin/project/update/${project.id}"><button class="buttons">Update</button></a>
                                </td>
                            </tr>
                        `
            }).join("")};
               
            </tbody>
        </table>
    </div>
    </body>
    </html>
    `
}
export default ProjectManagementPage
