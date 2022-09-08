# etch-a-sketch
A project from [The Odin Project - Foundation Course](https://www.theodinproject.com/courses/foundations/lessons/etch-a-sketch-project)

# Live Preview

# Learning Outcomes
  - Deepened knowledge of DOM and its manipulation.
  - Improved CSS Grid understanding and usage.
  - Improved code structure and code readability.
  - Improved clean code writing.

# Goals
Build a browser version of something between a sketchpad and an Etch-A-Sketch.

Steps to make it happen:
  1. Create a webpage with 16x16 grid of square divs.
  2. Set up hover effect so square divs change color when mouse passes over them.
  3. Add button to ask user for number of squares per side for grid.
  4. Change hover effect so square divs change color to a random RGB value.
  5. Change hover effect so each pass adds 10% of black to square divs color.

# Problem Solving
## Understanding the problem
The first thing I need to do in the HTML file is to create a div for the grid. This div will be the container for the square divs. 
Then with js I will create a div with class "square". 
With CSS I will format this class by making it a square (same length and width) and adding a border to it. I also will have to set all margins to 0px. 
Once I have the square div formatted I have to create the 16x16 grid. 
The first option I can think of to do it is through a for loop.
I have to research CSS grid option.

## Plan
  1. Create container div in HTML
  2. Create square div with js
  3. Format square div with css
  4. 

## Pseudocode


# Self-check
- [ ] Create square divs using JavaScript.
- [ ] Put grid squares inside another “container” div.
- [ ] Try different ways to make divs appear as a grid.
    - [ ] float/clear
    - [ ] inline-block
    - [ ] flexbox
    - [ ] CSS Grid
- [ ] Set up event listeners for when your mouse enters a div and ends when your mouse leaves it as a starting point for hovering effect.
- [ ] Try multiple ways to change the color of the divs.
    - [ ] add a new class to the div.
    - [ ] change the div’s background color using JavaScript.
- [ ] Create a brand new grid when user inputs a number without changing the total amount of pixels used.