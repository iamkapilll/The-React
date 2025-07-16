function customRender(reactElement, container){
    // this is previous approach
  /* const domElement = document.createElement(reactElement.type) // it will create an anchor tag    because reactElement's type is assigned as 'a'
   domElement.innerHTML = reactElement.children // this will show 'Click me to visit google'
   domElement.setAttribute('href', reactElement.props.href)// this will set 'href' for 'reactElement.props.href' as ''https://google.com''

   domElement.setAttribute('target', reactElement.props.target)// this will set 'target' for 'reactElement.props.target' as ' target: '_blank'' which mean opening a link in a new tab

   container.appendChild(domElement)
   */
    // this is new approach
    const domElement = document.createElement(reactElement.type) //it will create an anchor tag    because reactElement's type is assigned as 'a'
    domElement.innerHTML = reactElement.children   // this will show 'Click me to visit google'

    for (const prop in reactElement.props) {
        if(prop === 'children') continue;  // you can ignore this line
        domElement.setAttribute(prop, reactElement.props[prop])   // this line will set the Attributes for prop as reactElement.props[prop] as => href and target
    }
    container.appendChild(domElement)
    
}


// here in react each and every element is written in this format((TREE GRAPH)) so here is an examle for anchor tag
const reactElement = {
    type: 'a', // anchor tag
    props: { // props = property
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google' // kind of childElement: like if a parent had four days and those four days can be their childElements
}

const mainContainer = document.querySelector('#root')

 //kya inject karu(reactElement)  //kaha pe inject karu(mainContainer)
customRender(reactElement, mainContainer)
