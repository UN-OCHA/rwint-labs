/**
 * Add visibility togglers for the some elements of the header and footer.
 */
(function () {
  'use strict';

  function toggle(button, collapse) {
    var target = document.getElementById(button.getAttribute('aria-controls'));
    var expanded = collapse || button.getAttribute('aria-expanded') === 'true';

    // Switch the expanded/collapsed states.
    button.setAttribute('aria-expanded', !expanded);
    target.setAttribute('data-hidden', expanded);
  }

  function collapseAll(exception) {
    var elements = document.querySelectorAll('[aria-expanded="true"]');
    for (var i = 0, l = elements.length; i < l; i++) {
      var element = elements[i];
      if (element !== exception) {
        toggle(elements[i], true);
      }
    }
  }

  function handleToggle(event) {
    var target = event.target;
    if (target) {
      if (target.nodeName === 'SPAN') {
        target = target.parentNode;
      }
      collapseAll(target);
      toggle(target);
    }
  }

  function handleOutsideClick(event) {
    var target = event.target;
    if (target) {
      if (target.nodeName === 'A') {
        collapseAll();
      }
      else if (target.hasAttribute) {
        var body = document.body;
        while (target && target.hasAttribute && !target.hasAttribute('aria-expanded') && !target.hasAttribute('data-hidden') && target !== body) {
          target = target.parentNode;
        }
        if (target && target.hasAttribute && !target.hasAttribute('aria-expanded') && !target.hasAttribute('data-hidden')) {
          collapseAll();
        }
      }
    }
  }

  function setToggler(id, textAccessibility, textDisplay) {
    var element = document.getElementById(id);

    // Skip if the element was not found.
    if (!element) {
      return;
    }

    // Add the aria attribute to control visibility to the form.
    element.setAttribute('data-hidden', true);

    // Button label.
    var label = document.createElement('span');
    label.appendChild(document.createTextNode(textDisplay));

    // Extended label for accessibility.
    var accessibleLabel = document.createElement('span');
    accessibleLabel.className = 'accessibility';
    accessibleLabel.appendChild(document.createTextNode(textAccessibility));

    // Create the button.
    var button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('id', id + '-toggler');
    button.setAttribute('aria-expanded', false);
    button.setAttribute('aria-controls', id);
    button.setAttribute('value', textDisplay);
    button.appendChild(accessibleLabel);
    button.appendChild(label);

    // Add toggling function.
    button.addEventListener('click', handleToggle);

    // Add the button before the toggable element.
    element.parentNode.insertBefore(button, element);
  }

  if (document.documentElement.className === 'js') {
    // Collapse popups when clicking outside of the toggable target.
    document.addEventListener('click', handleOutsideClick);

    // Add the togglers.
    setToggler('ocha-services', 'Toggle ', 'OCHA Services');
  }
})();
