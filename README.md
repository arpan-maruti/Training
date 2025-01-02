
# Training Repository

This repository contains projects, assignments, and examples created during the internship program, covering key concepts in HTML, CSS, JavaScript, and TypeScript.

## Repository Structure

### `html-css`
This folder includes examples and assignments that cover foundational and advanced HTML and CSS topics.  
#### **HTML Topics**:
- Elements, Attributes, and Links
- Tables
- Div, Classes, and Id
- Entities
- Forms
- Canvas
- Audio, Video, and Media APIs

#### **CSS Topics**:
- Selectors, Borders, and Box Model
- Max-width and Positions
- Units and Counters
- Dropdowns and Rounded Corners
- Border Images and Shadows
- Tooltips
- Image Filter and Image Masking
- Box Sizing
- Flexbox

---

### `assignment-1`
This folder contains the **Infinite Scrolling Module Assignment**.  
#### Highlights:
- Developed a smooth infinite scrolling effect for logos.
- Built using HTML and CSS.
- Optimized for responsive design and cross-browser compatibility.

---

### `javascript`
This folder contains examples and exercises on various JavaScript topics.  
#### **JavaScript Topics**:
- `let`, `var`, `const`
- Objects and Arrays
- Functions and Constructors
- Numbers and Dates
- Control Structures: If-Else, Switch Case, Loops
- Advanced Concepts: Destructuring, Hoisting, Classes, JSON
- Sets and Maps
- Browser APIs and HTML DOM
- Graphics
- jQuery and AJAX

#### **Additional Topics**:
- Web APIs with Examples
- Async Programming and Promises

---

### `typescript`
This folder includes projects and examples on TypeScript to build scalable and maintainable applications.  
#### **TypeScript Topics**:
- Basic Types: `any`, `enum`, and `null`
- Functions, Objects, Arrays, and Tuples
- Advanced Concepts: Aliases, Interfaces, Union Types, and Casting
- Object-Oriented Programming: Classes and Generics
- Utility Types: `keyof`
- Error Handling

---

### `angularjs`
This folder contains projects and examples related to AngularJS.  
#### **AngularJS Topics**:
- Components
- Interpolation
- Template
- Routing
- Property Binding
- Forms (Basic)
- Directives
- Events
- Dependency Injection
- Service
- HTTP Client

#### **Installation for AngularJS**:
To get started with AngularJS, follow the steps below:

1. **Install Node.js**:
   If you haven't installed Node.js, download and install the latest LTS version from the official website: [Node.js Official Website](https://nodejs.org/).

2. **Install Angular CLI**:
   Once Node.js is installed, you can install the Angular CLI globally by running the following command in your terminal:
   ```bash
   npm install -g @angular/cli
   ```

3. **Create a New Angular Project**:
   After installing the Angular CLI, you can create a new Angular project by running:
   ```bash
   ng new my-angular-app
   ```

4. **Navigate to Your Project Folder**:
   Change to your project directory:
   ```bash
   cd my-angular-app
   ```

5. **Start the Development Server**:
   You can now run the Angular application by executing:
   ```bash
   ng serve
   ```
   This will start the development server, and you can access your application in your web browser at `http://localhost:4200`.

---

## Getting Started

### For HTML/CSS/JavaScript Files
1. **Clone the Repository**  
   Clone this repository to your local machine:  
   ```bash
   git clone https://github.com/arpan-maruti/training.git
   ```

2. **Open in Visual Studio Code (VS Code)**  
   Navigate to the cloned folder and open it in VS Code.

3. **Install Live Server Extension**  
   - Go to the Extensions tab in VS Code (`Ctrl+Shift+X`).
   - Search for `Live Server` and install it.

4. **Run Files with Live Server**  
   - Open the desired HTML file.
   - Right-click and select `Open with Live Server`, or click the **Go Live** button in VS Code.
   - The file will open in your default web browser, and changes will be automatically refreshed.

---

### For TypeScript Files
1. **Navigate to the TypeScript Folder**  
   Move to the `typescript` folder using the terminal:  
   ```bash
   cd path/to/typescript
   ```

2. **Compile TypeScript Files**  
   Use the TypeScript Compiler (`tsc`) to compile `.ts` files into JavaScript:  
   ```bash
   tsc filename.ts
   ```  
   To compile all files together:  
   ```bash
   tsc
   ```

3. **Run Compiled JavaScript Files**  
   Use Node.js to execute the compiled `.js` files:  
   ```bash
   node dist/filename.js
   ```

4. **View the Output**  
   The output will appear in the console. Compiled `.js` files will be stored in the `dist` folder.

---

## Contribution Guidelines
- Follow [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow) for collaborative development.
- Ensure all code contributions adhere to repository coding standards.
- Create pull requests for changes, with detailed descriptions of implemented features or fixes.

---