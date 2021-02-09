---
title: Interactive states
---

<p class="u-d1">Updated on 28. April 2020 by Ingrid Vestby Fredriksen</p>

All interactive elements should have states to indicate that they are clickable, and to show the status of that element.

## Usage

For most elements we should use the default styling for hover and focus. Aberrations are described in the components. For example, input fields and CTA have their own styling for states.

### Principles

**Consistency** <br/>
A consistent pattern increases usability.

**Quietly obvious** <br/>
The state should be subtle, and at the same time help to show what is clickable.

### Types

**Hover** <br/>
Shows that the element is clickable, and appears on mouseover.

**Focus** <br/>
Shows which element your focus is on, and enables you to interact with that element. For example when using alternative ways of navigating, like keyboard.

**Active** <br/>
Is a visual response to something you have clicked on.

## Styling

To show the states above, we use a low opacity background with a low opacity border. This makes it possible to show an interactive element with another interactive element inside, for example an ad preview with a favorite option. It can be used in different shapes, and should have a minimum of 8px border radius.

How to show selected, unselected, error, and disabled states is described on each component.

Note: Using disabled state is an anti-pattern. Even if we (developers and designers) think it is obvious why an element is disabled, there will ALWAYS be users who don't understand. Please consider more informative alternatives before choosing to use disabled state on an element.
