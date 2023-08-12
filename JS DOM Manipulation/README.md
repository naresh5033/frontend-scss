### Javascript DOM manipulation (FCC)

- - DOM Tree --
  - Document (root node of the dom tree, and it has one child element ie. html element)
    - Element<html> (is the parent for the head and body elem)
      - elemnt head, and body(has many sibling elements)
        - class attributes <p>, <h1>

- the dom obj itself is the prop of the window object, which is the global top level object representing the tab in the browser window
- and this window obj has the access to the information such as the toolbar, h, w,of the window prompts and alerts

# selecting the element

- in order to manipulate the dom. first we need to select the element. there are 5 different ways to select the element.

  1. getElementById() 2. getElemenstByClassName(get all the elems with the class in the doc) 3. getElementByTagName() 4. querySelector() 5. querySelectorAll()

  - getElementByTagName() - returns the array of elements with the given tag name.. documen.getElementByTagName('li')
  - querySelector() - used to select the one item or the first item with the selectors given. it can accepts all the elem, or css class/id.. document.querySelector('div') --> pulls the first div tag that matches
  - querySelectorAll() - this method selects the node list of collections that matches the selector, unlike the queryselector this pulls all the elems that matches.
  - these query selectors methods are powerful and goto go way of selecting the elements.

  # styling

  - to style the element in the js first we need to grab the element and apply the styling
  - ex. const title = document.querySelector('#main-heading');
    title.style.color = 'red';
    - but this method is called inline stling, which works only for the one elem
    - if we wana use for all elems then we ve to use query selectorAll()
    - and then loop thru all the elems for (i =0, i>=listItmes.lenght, i++) {listItmes[i].style.color='red';}

# create elems

- const li = document.createElement('li'); this isn't doing anything yet(just created a elem) to add this elem to our document, need to append it
- ul.append(li);.. will append the elem to the document.
- there are 3 different ways we can create text or modify text. 1. inner text 2. text content 3. inner html
- with the inner text it displays the text inside as it is, with the text content it displays the text as it is in the same way as the html file and with the inner html same as text content also shows the tags.
- the inner html bit of security issue we don't wana display the tags in the html
- "Modify classes and attr"
  - li.setAttributes('id', 'main-heading') to set the attr for any elem, and for remove the attributes li.removeAttributes('id')
  - and to get the attr we can use .gitAttributes('id')
  - for the classes ul.classList.add('list-item') add the class to the list item.. and to remove .remove('list-item') and .contains() to check if the class is there or not returns bool
  - "REmove the elements" li.remove().. removes the list elems
 
# Traverse DOM
- to find the parent element we ve 2 options. 1. .parentElement(will retrieve the parent html elem ie doc node) 2. .parentNode(will try and retrieve any node), so generally the parent node is more commonly used in when travesing the dom
- "childnode Traversal" 1. console.log(ul.childNodes); will give us the ul list of all the child nodes 
- note - in this node prop even the indentations, new lines will be considered as the text nodes (not only the elems)
  - firstChild and lastChild will give us the first child and the last child in the node (not in the elem), so even if its the text. it still considered as the child
  
  - "ul.children" will only grab the elems (unlike the node prop), and now we can grab the first and the last child elems
  - .firstElementChild and .lastElementChild

"Sibling Traversal" -- to traverse the sibling elements (the elems from  the same level)
  - .previousSibling and .nextSibling to grab the prev and the next node node (even if its text node)
  - .previousElementSibling and the .nextElementSibling to grab the prev and the next elems in the sibings

# Event Listeners

- as we know the event listeners adds the basic interactive fns to the html elems by listening to the diff events that takes place on the page
- onClick (btn), in html 
- 2nd method is to create a event listener in the js -- ex . element.addEventListener("click", function);
- "Mouse Over event" - element.addEventListener("mouseover", function);
- we can apply many event listeners to a single elem, where as in the html method we will ve only one option to app(onClick), and if we try to add the new one the new one will overide the old one
- the hidden btn ex- function revealContent () {if (hiddenContent.classList.contains("reveal-btn"){hiddenContent.classList.remove("reveal-btn");}else{add the reveal button}
- then  add the event listener revealBtn.addEventListener("click", revealContent);
- this technique we can use for the toggle menu or add the hamburger menu in the small screen and displays the error msgs or many things we can do.

# Event Propagation

- how the event traverse through the DOM tree.
- think of it as an electricity that travels to the wire
- the event traverse through each node  in the DOM tree until it reaches the end or forcibly stopped.
- This one has 3 phases 1. Event Capturing 2. Target 3. Event Bubbling
- <img src="./JS DOM Manipulation/Event propagation phases.png"/>
- In the above diagram we can see how the event traverse phase works.
- the 1st phase will start frm the dom travel each elems until it reaches the target phase.
- then the target phase, once its clicked then the next phase will be the bubble phase opposite of the capture phase, it just travels up to the doc.
- the addEventListener() has the 3rd param (a bool, by default its true), which tells us whether we wanna capture or bubbling event. if its false its in bubbling phase and if it's true its in capture phase'
- to see all the event properties that it traverse.. addEventListener('click',  function(e) {console.log(e);}) - can see all the props there one of the prop is "target"
- and to see the target prop -- console.log(e.target) --> is indeed the click event.
- to stop the propagation in b/w we can use -- e.stopPropagation()
  - another ability of the bubbling phase is to fire off the event only once .
  - to use that addEventListener('click', function(){},{once:true}), it will fire the event only once if we select the btn second time.

- "Prevent Default" - prevent any default behavior that might occur on an event or an element.
- e.preventDefault()

# Event Delegation

- is one of the most potent event handling patterns
- it allow us to append the single event listener to the parent element that adds it all of its present and the future descendants that match the selectors
- instead of adding the event listener to each of the list items(children) 
- we can just delegate the event to the parent (so the parent elem will catches the bubbling event) and it will applies to the all the child items, which saves the code.
- ex - document.querySelector('#sport').addEventListener('click',function(e){const target = e.target; if (target.matches('li'){target.style.backgroundColor='grey'))}}
- so this way the event listener of the parents applies to all the present and the future child elems.

# Project #1 Quote Generator.

- key concepts 
  - document.querySelector()
  - addEventListener()
  - MathObject()
  - innerText()
  - through out all the projects the bg img class is.. body{background: url('./img/') no-repeat center center/ cover}
  - create the query selector for the newquote, quote and person class. and the quotes list[]
  - then button.addEventListener('click',function(){let random = Math.floor(Math.random() * quotes.length;
          quote.innerText =quotes[random].quote;
           person.innerText =quotes[random].person}) // this will gives us the rand quotes by the diff people/author.
- 
# Project #2 Modal

- the ui element, usually triggered by the user allowing to view more information or completes the action to nav to other url
- key concepts
  - document.getElementById()
  - addEventListener()
  - e.target()
  - css styling and animation
    - req 3 variables, one for the open, one for the close, one for the modal container, by using the document.getElementById()
      - then our event listeners 
        openBtn.addEventListener('click', function(){modalContainer.style.display ='block'});
        closeBtn.addEventListener('click', function(){modalContainer.style.display ='none'});
        window.addEventListener('click', function(e){if (e.target === 'modalContainer){modalContainer.style.display = 'none'}}) //to select anywhere on the window to close the modal.
    - and for the animation we can use the css class "@keyframes"

# Project #3 Accordion

- it will allow us to squeeze in lot of content in the small space ex- FAQ + sign to expand the content and - to minimize the content
- key concepts 
  - document.getElementByClassName()
  - addEventListener()
  - For Loop 
  - this  (we can use this by inserting the class of active on all those ref pts, which will be content containers )
  - classList.toggle() .. the toggle() will just add and remove the classname of an element.

  - const accordion = document.getElementByClassName('contentContainer');
    for (i=0, i>=accordion.length, i++){accordion[i].addEventListener('click', function(){
      this.classList.toggle('active');}} // now we can grab this active class inside our css and assign styling as we want

# Project #4 Stop Watch
- has the start and reset btn and once it starts it will ve the stop btn
- Key Concept
  - document.querySelector()
  - document.getElementById()
  - addEventListener()
  - toString()
  - setInterval()
  -innerHtml
    - first create the variables for the buttons one for the startStopBtn and resetBtn, by using the document.querySelector(), 
    - then the variables for the timer vals .. seconds, minutes and hours all are 0.
    - then the leading zero vars all are 0, seconds, minutes and hours
    - then the variables for the setTimeout function nd the timerStatus.. let timerInterval = null; let timerStatus = "stopped"
    - then the stop watch fn
    - function stopWatch(){seconds ++; if (seconds/60 ===1);{seconds = 0; minutes ++; if (minutes/60 === 1); {minutes = 0; hours ++;}}}
    - then the leading zero condn if (seconds >10){ leadingSecond = "0" + seconds.toString()}{else leadingSeconds = seconds;}; // lly for the minutes and the hours
    - now lets display this timer
    - const displayTimer = document.getElementById('timer').innerText = hours + ":" minutes + ":" seconds;
    - finally the set the event listener to the start stop btn 
      - startStartBtn.addEventListener('click', function(){
      - if (timerStatus == "stopped")
         timerInterval = window.setTimeout(stopWatch, 1000);
          document.getElementById('startStopBtn').innerHtml <i insert the pause icon/>
           timerStatus = "started";} else { 
            window.clearInterval(timerInterval)
            document.getElementById('startStopBtn').innerHtml <i insert the play icon/> 
            timerStatus = "stopped"; }}
      
  - finally for the reset btn event listener
      - resetBtn.addEventListener('click', function(){
          window.clearInterval(timerInterval);
          seconds = 0; minutes = 0;; hours = 0;
          document.getElementById('resetBtn').innerText = "00:00:00"; })

# Project #5 ToDo List

- we can create the task and then mark as completed (strike out) and be able to delete it 
- key concept 
  - document.getElementById() 
  - addEventListener()
  - e.target()
  - append.child()
  - createElement()
  - parentElement()
  - remove()
  - classList.add()
  - first create the vars const addTask = document.getElementById('add-task'), lly for the taskContainer and the taskI/p
  - then the event listener for the add btn 
    - addTask.addEventListener('click', function(){
       let task = document.createElement('div');
        task.classList.add('task') }) \\ add the name of the class for our div element
        let li = document.createElement('li');
        li.innerText= `${inputTask.value}`; task.appendChild(li);}})
        
    - let checkButton = document.createElement('button'); // for the check button
      checkButton.InnerHTML= <i the check icon from font awesome>;
      checkButton.classList.add('check-task');
      task.appendChild(checkButton); // lly for the delete button as well
    - now put the alert msg if the i/p field is empty
    - if (inputTask.value === ""){alert("please enter something...")}else { taskContainer.appendChild(task); inputTask.value = "";} //reset the i/p field
      - checkBtn.addEventlistener('click', function(){
          checkBtn.parseElement.style.textDecoration = "line-through"; }) // we need to go one level above/traverse to the parent dom
           and forr the delete button
           deleteBtn.addEventlistener('click', function(e){
            let task = e.target;
            target.parentElement.parentElement.removeChild(); }) //two levels up, the target is the trash can and the parent elem is the list item and the two level up parent is the task. so that's how we remove the task
      - 
