/* eslint-disable no-param-reassign */
/* eslint-disable no-mixed-operators */

const smooth = (() => {
  const scroll = event => {
    event.preventDefault();
    const targetElemId = event.currentTarget.getAttribute('href') === '#' ? 'about' : event.currentTarget.getAttribute('href');
    const targetPosition = document.querySelector(`${targetElemId}`).offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 2000;
    let startTime = null;

    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t -= 1;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const animation = currentTime => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) window.requestAnimationFrame(animation);
    };
    window.requestAnimationFrame(animation);
  };
  return { scroll };
})();
export default smooth;
