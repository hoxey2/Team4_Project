function getSiblings(element) {
  let siblings = [];
  let sibling = element.parentNode.firstChild;

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== element) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  // 첫 번째 형제와 마지막 형제를 제외합니다.
  siblings.shift(); // 첫 번째 형제 제외
  siblings.pop(); // 마지막 형제 제외
  console.log(siblings)
  return siblings;
}

const easyPagination = ({
  items,
  rows = 10,
  handlePaginatedItems,
  buttonsWrapper,
  buttonsContainerClass = "pagination",
  buttonClass = "page-link",
  nextClass = "page-link",
  prevClass = "page-link",
  nextText = " >",
  prevText = "< ",
  activeClass = "active",
}) => {
  if (!items) {
    console.error("items not defined. Send {items: ...} as a parameter.");
    return false;
  }

  const generateUID = () => {
    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart;
  };

  const createPaginationButtons = ({ wrapper }) => {
    let paginationButtons = document.createElement("div");

    paginationButtons.classList.add(
      "pagination-" + uuid,
      buttonsContainerClass
    );

    

    let paginationButton = (page) => {
      let button = document.createElement("button");
      button.setAttribute("type", "button");
      button.classList.add(buttonClass);

      if (currentPage == page){
        button.classList.add(activeClass);
        button.style.backgroundColor="#0051A4"
        button.style.color="white"
      } 
      button.innerHTML = page;

      button.addEventListener("click", function () {
        currentPage = page;
        console.log(button.sibling)
          button.style.backgroundColor="#0051A4"
          button.style.color="white"
        // here1        
        let myElementSiblings = getSiblings(button);
        myElementSiblings.forEach(function(sibling) {
          // here2 [0]
          sibling.style.backgroundColor="white"
          sibling.style.color="black"
          // 형제 요소들에 대한 작업을 수행합니다.
        });
        
        self.paginate(currentPage, false);

        let current_btn = getActiveBtn();
        current_btn.classList.remove("active");

        button.classList.add("active");
      });

      return button;
    };

    let prevNextBtns = () => {
      let prevBtn = document.createElement("button");
      prevBtn.setAttribute("type", "button");
      prevBtn.classList.add(prevClass);
      prevBtn.innerHTML = prevText;


      
      let nextBtn = document.createElement("button");
      nextBtn.setAttribute("type", "button");
      nextBtn.classList.add(nextClass);
      nextBtn.innerHTML = nextText;

      prevBtn.addEventListener("click", () => {
        self.prev();
      });

      nextBtn.addEventListener("click", () => {
        self.next();
      });

      return { prevBtn, nextBtn };
    };

    const { prevBtn, nextBtn } = prevNextBtns();

    paginationButtons.appendChild(prevBtn);

    for (let i = 1; i < pageCount + 1; i++) {
      let btn = paginationButton(i);
      paginationButtons.appendChild(btn);
    }

    paginationButtons.appendChild(nextBtn);

    wrapper.appendChild(paginationButtons);
  };

  const getAllBtns = () => {
    return document.querySelectorAll(`.${"pagination-" + uuid} button`);
  };

  const getActiveBtn = () => {
    let  button= document.querySelector(`.${"pagination-" + uuid} button.active`)

    return document.querySelector(`.${"pagination-" + uuid} button.active`);
  };

  const uuid = generateUID();
  rows = parseInt(rows);
  let currentPage = 1;
  let pageCount = Math.ceil(items.length / rows);
  const hasButtons = typeof buttonsWrapper != "undefined";
  const getCurrentPage = page =>{
    let totalPage = Math.round(items.length/10)
    if(totalPage == 0){
      totalPage = 1
    }
    $(".event_main_total_content").children('span').empty()
    $(".event_main_total_content").children('span').append((page+1)+"/"+totalPage+"검색결과 총 <font color='red' id='total_count_text'>"+items.length+"</font>건이 검색 되었습니다.</span>")

   }
  const self = {
    paginate: (page = 1, loadButtons = true) => {
      page--;
      getCurrentPage(page)
      let start = rows * page;
      let end = start + rows;
      let paginatedItems = items.slice(start, end);

      if (loadButtons && buttonsWrapper)
        createPaginationButtons({
          wrapper: document.querySelector(buttonsWrapper),
        });

      if (handlePaginatedItems) {
        handlePaginatedItems(paginatedItems);
      } else return paginatedItems;
    },
    next: () => {
      if (currentPage >= pageCount) return;
      currentPage++;
      let page = currentPage - 1;
      let start = rows * page;
      let end = start + rows;
      let paginatedItems = items.slice(start, end);

      if (hasButtons) {
        let current_btn = getActiveBtn();
        current_btn.classList.remove("active");
        current_btn.nextElementSibling.classList.add("active");
        let nowBtn = current_btn.nextElementSibling
        nowBtn.style.backgroundColor="#0051A4"
        nowBtn.style.color = "white"
       
        let myElementSiblings = getSiblings(nowBtn);
        myElementSiblings.forEach(function(sibling) {
          // here2 [0]
          sibling.style.backgroundColor="white"
          sibling.style.color="black"
          // 형제 요소들에 대한 작업을 수행합니다.
        });
        
      }

      if (handlePaginatedItems) {
        handlePaginatedItems(paginatedItems);
      } else return paginatedItems;
    },
    prev: () => {
      if (currentPage === 1) return;
      currentPage--;

      let page = currentPage - 1;
      let start = rows * page;
      let end = start + rows;
      let paginatedItems = items.slice(start, end);

      if (hasButtons) {
        let currentButton = getActiveBtn();
        currentButton.classList.remove("active");
        currentButton.previousElementSibling.classList.add("active");
        let nowBtn = currentButton.previousElementSibling
        nowBtn.style.backgroundColor="#0051A4"
        nowBtn.style.color ="white"

        let myElementSiblings = getSiblings(nowBtn);
        myElementSiblings.forEach(function(sibling) {
          // here2 [0]
          sibling.style.backgroundColor="white"
          sibling.style.color="black"
          // 형제 요소들에 대한 작업을 수행합니다.
        });
      }

      if (handlePaginatedItems) {
        handlePaginatedItems(paginatedItems);
      } else return paginatedItems;
    },
    changeRows: (newRows = 10) => {
      rows = parseInt(newRows);
      document.querySelector(".pagination-" + uuid).remove();
      self.paginate(currentPage);
    },
    changeItems: (newItems) => {
      if (!newItems) return false;

      document.querySelector(".pagination-" + uuid)?.remove();

      items = newItems;
      pageCount = Math.ceil(items.length / rows);
      currentPage = 1;
      self.paginate(1);
    },
  };

  return self;
};
