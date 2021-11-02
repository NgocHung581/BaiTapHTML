var input = document.getElementById("inputTask");
var btnSave = document.getElementsByClassName("saveBtn")[0];
var listTask = document.getElementById("todo-list");
var taskNumber = document.getElementById("taskNumber");
var clearAllbtn = document.getElementById("btnClearAll");

input.onkeyup = function () {
  var userData = input.value;
  if (userData.trim() != 0) {
    btnSave.classList.add("active");
  } else {
    btnSave.classList.remove("active");
  }
};

btnSave.onclick = function () {
  var userData = input.value;
  if (userData == "") {
    alert("Please enter value!");
  } else {
    var getLocalStorage = localStorage.getItem("New Todo");
    if (getLocalStorage == null) {
      listArr = [];
    } else {
      listArr = JSON.parse(getLocalStorage);
    }
    var taskID = this.getAttribute("id");
    if (taskID) {
      listArr[taskID] = userData;
      this.removeAttribute("id");
    } else {
      listArr.push(userData);
    }
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTask();
    this.classList.remove("active");
  }
};

deleteTask = function (index) {
  if (confirm("Do you want to delete?")) {
    var getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTask();
  }
};

clearAllbtn.onclick = function () {
  if (confirm("Do you want to delete all tasks?")) {
    listArr = [];
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTask();
  }
};

editTask = function (index) {
  var getLocalStorage = localStorage.getItem("New Todo");
  listArr = JSON.parse(getLocalStorage);
  input.value = listArr[index];
  btnSave.setAttribute("id", index);
  btnSave.classList.add("active");
};

showTask = function () {
  var getLocalStorage = localStorage.getItem("New Todo");
  if (getLocalStorage == null) {
    listArr = [];
  } else {
    listArr = JSON.parse(getLocalStorage);
  }
  var newTagLi = "";
  listArr.forEach((element, index) => {
    newTagLi +=
      '<li class="todo-item"><span class="nameTask">' +
      element +
      '</span><div class="btn-edit-delete"><span class="btnEdit" onclick = editTask(' +
      index +
      ')><i class="ti-pencil"></i></span><span class="btnDelete" onclick = deleteTask(' +
      index +
      ')><i class="ti-trash"></i></span></div></li>';
  });

  listTask.innerHTML = newTagLi;
  taskNumber.textContent = listArr.length;
  input.value = "";
};
