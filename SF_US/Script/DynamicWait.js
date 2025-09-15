function dynamic_wait(locator, cap) {
  var delay = 0;
  while (delay <= cap) {
    if (locator.Exists) {
      return true; // Element found
    }
    Delay(2000);
    delay += 2000;
  }
}

function dynamic_wait_visibility(locator, cap) {
  var delay = 0;
  while (delay <= cap) {
    if (locator.VisibleOnScreen) {
      return true; // Element found
    }
    Delay(2000);
    delay += 2000;
  }
}