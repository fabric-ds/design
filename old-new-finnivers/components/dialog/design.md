---
title: Dialog
---

<p class="u-d1">Updated on 26 May 2020 by Adi Dick</p>

A dialog is a “conversation” between the system and the user and is prompted when the system needs input from the user or to give the user urgent information concerning their current workflow. It informs the user about a task and can contain critical information, require decisions or actions, and can sometimes involve multiple tasks.

## Usage

A dialog is a type of modal window and helps focus the user’s attention exclusively on one task or piece of information via a window that sits on top of the page content. They disable all other functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken.

Dialogs are purposefully interruptive, so they should be used sparingly.

Dialogs should be used for:

- Errors that block an app’s normal operation
- Critical information that requires a specific user task, decision, or acknowledgement

### Principles

**Focused** <br />
Dialogs focus user attention to ensure their content is addressed.

**Direct** <br />
Dialogs should be direct in communicating information and dedicated to completing a task.

**Helpful** <br />
Dialogs should appear in response to a user task or an action, with relevant or contextual information.

### Best practices

- Use sparingly because they interrupt the natural flow.
- Use for quick interactions (shorter than a couple of minutes).
- Be specific about the action the user is about to do
- Avoid scrolling, consider using bottom sheets if there is much content
- The cancel action should always be to the left, while the main action is to the right. Buttons are placed at the bottom of the box.

Use native dialog boxes in the app for system specific changes. Custom dialog boxes can be used for priming, and for FINN specific stuff.

## Anatomy

A dialog is a form of modal window meaning that access to all other content in the UI becomes inactive until the modal is addressed. When the dialog is visible all other content is deactivated and covered by a dark overlay giving the dialog clear focus.

## Hierarchy and placement

A dialog is always the highest priority. It is usually placed in the centre of the screen on top of a darkened background creating a starker contrast and giving it clear visual prominence

## Content guidelines

Are there any necessary tone of voice details that need to be mentioned?
E.g. Action buttons with a more assertive or “commando” tone.

## Related components

Bottom sheets can be used as an alternative for custom dialogues.
