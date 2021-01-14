---
title: Keyboard navigation
---

It is required that all services on FINN can be fully utilized with a standard keyboard as the only input device.
Ensuring usability with a keyboard also ensures that alternative input devices such as [switch input devices](https://en.wikipedia.org/wiki/Switch_access) will work.
Even [screen readers](../screen-readers/) and other assistive technologies can benefit from basic keyboard support.

Native interactive HTML elements support keyboard input by default, but extra care may be needed when creating custom elements and components. The following list describes the minimum expectations regarding keyboard support:

## The Tab key

This is the fundamental key for navigating between interactive elements. As the user navigates by Tab (or Shift+Tab), it is crucial that a focus indicator is clearly visible.

## The Enter key

This is the default key for activating an element.
In HTML, it is important to note that only a button element or an a-element with a non-empty href attribute will map Enter keydown events to a click event.

## The Escape key

In web applications, the Escape key is used to dismiss popup widgets such as modal dialog boxes and dropdown menus.
