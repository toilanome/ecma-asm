import { add } from "../../api/project";
import { router } from "../../lib";
import { useEffect } from "../../lib";

const AddProjectPage = () => {
    useEffect(() => {
        const addForm = document.querySelector("#add-form")
        addForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const newProject = {
                "title": document.querySelector("#title").value,
                "repository": document.querySelector("#repository").value,
                "description": document.querySelector("#description").value,
                "image": document.querySelector("#image").value,
                
                "url": document.querySelector("#url").value
            }
            // fetch(`http://localhost:3000/projectList`, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(newProject)
            // }).then(() => {
            //     router.navigate('/admin/project')
            // })

            add(newProject).then(() => { router.navigate('/admin/project') })
        })


    })  

    
    return /*html*/`
    
    <h2>Thêm Sản Phẩm </h2>
    <div class="formbold-main-wrapper" >
  <div class="formbold-form-wrapper">
    <form action="" method="POST" id="add-form">
        <div class="formbold-input-flex">
          <div>
              <input
              type="text"
              name="Title"
              id="title"
              placeholder="Nhập Title"
              class="formbold-form-input"
              />
              <label for="Title" class="formbold-form-label"> Title </label>
          </div>
          <div>
              <input
              type="text"
              name="repository"
              id="repository"
              placeholder="Nhập Repository"
              class="formbold-form-input"
              />
              <label for="repository" class="formbold-form-label"> Repository </label>
          </div>
        </div>

        <div class="formbold-input-flex">
          <div>
              <input
              type="text"
              name="image"
              id="image"
              placeholder="Nhập Link"
              class="formbold-form-input"
              />
              <label for="image" class="formbold-form-label"> Image </label>
          </div>
          <div>
              <input
              type="text"
              name="url"
              id="url"
              placeholder="Nhập Url"
              class="formbold-form-input"
              />
              <label for="url" class="formbold-form-label"> Url </label>
          </div>
        </div>

        <div class="formbold-textarea">
            <textarea
                rows="6"
                name="description"
                id="description"
                placeholder="Write your description..."
                class="formbold-form-input"
            ></textarea>
            <label for="description" class="formbold-form-label"> Description </label>
        </div>

        

        <button class="formbold-btn">
            Send 
        </button>
    </form>
  </div>
</div>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color:#f6f5f3;
  }
  body {
    font-family: "Inter", sans-serif;
    
  }
  h2{
    text-align: center;
    margin-top: 60px;
    color: black;
    margin-bottom: 38px;
  }
  .formbold-main-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 48px;
    border:1px solid;
    border-radius : 133px;
  }

  .formbold-form-wrapper {
    margin: 0 auto;
    max-width: 550px;
    width: 100%;
    background: white;
  }

  .formbold-input-flex {
    display: flex;
    gap: 20px;
    margin-bottom: 22px;
  }
  .formbold-input-flex > div {
    width: 50%;
    display: flex;
    flex-direction: column-reverse;
  }
  .formbold-textarea {
    display: flex;
    flex-direction: column-reverse;
  }

  .formbold-form-input {
    width: 100%;
    padding-bottom: 10px;
    border: none;
    border-bottom: 1px solid #DDE3EC;
    background: #f6f5f3;
    font-weight: 500;
    font-size: 16px;
    color: #07074D;
    outline: none;
    resize: none;
  }
  .formbold-form-input::placeholder {
    color: #536387;
  }
  .formbold-form-input:focus {
    border-color: #6A64F1;
  }
  .formbold-form-label {
    color: #07074D;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    display: block;
    margin-bottom: 18px;
  }
  .formbold-form-input:focus + .formbold-form-label {
    color: #6A64F1;
  }

  .formbold-input-file {
    margin-top: 30px;
  }
  .formbold-input-file input[type="file"] {
    position: absolute;
    top: 6px;
    left: 0;
    z-index: -1;
  }
  .formbold-input-file .formbold-input-label {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
  }

  .formbold-filename-wrapper {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 22px;
  }
  .formbold-filename {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    line-height: 24px;
    color: #536387;
  }
  .formbold-filename svg {
    cursor: pointer;
  }

  .formbold-btn {
    font-size: 16px;
    border-radius: 5px;
    padding: 12px 25px;
    border: none;
    font-weight: 500;
    background-color: #6A64F1;
    color: white;
    cursor: pointer;
    margin-top: 25px;
  }
  .formbold-btn:hover {
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
  }

</style>

       
    `
}

export default AddProjectPage;