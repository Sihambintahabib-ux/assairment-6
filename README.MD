### QUESTION  

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- getElementById : only use to select  html tag by **ID**
- getElementsByClassName : only use to select  html tag by **class**
- querySelector : Selects the **first** element that matches a specified CSS selector
- querySelectorAll : Selects **all** element that matches a specified CSS selector
---

### 2. How do you create and insert a new element into the DOM?

- create : Use  **.createElement()** method to create a new HTML element.
- insert : **appendChild()**  method help to adds the new element to parent element.
---

### 3. What is Event Bubbling and how does it work?

- When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
- in simple words , instead of selecting all child , selecting parent for better output is known as **enent bubbling**
---

### 4. What is Event Delegation in JavaScript? Why is it useful?

- Event Delegation : used to manage and handle events on multiple child elements by attaching a single event listener to a common ancestor element.
### uses of Event Delegation : 
 1. Improved Performance and Reduced Memory Usage
2. Cleaner and More Maintainable Code
3. Easy accesable of the code


---

### 5. What is the difference between preventDefault() and stopPropagation() methods?

- **preventDefault()** : deals with the default behavior of the event.
- **stopPropagation()** : deals with the propagation (flow) of the event through the DOM.

---
 
<!-- 
I have a card with some text and a button inside it. I want that when a user clicks the button, some specific text from the card is copied to the clipboard using JavaScript. Please provide the code and explain it step by step. :
 a) On clicking the **Copy button**, show an alert and **increase the copy count**  

-  b) Hotline number will be **copied on click** so it can be pasted anywhere  
 -->

<!-- questaing  -->
<!-- ftp://192.168.1.5:2221 -->

GitHub Repository : https://github.com/Sihambintahabib-ux/assairment-5.git
 <br> Live Link : https://sihambintahabib-ux.github.io/assairment-5/
 