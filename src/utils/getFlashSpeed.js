export default d => {
  let speed;
  if (d > 1.5) return 1300

  if (d < 1.5 && d > 1.45) {
    speed = 1250;
  } else if (d < 1.45 && d > 1.4) {
    speed = 1200;
  } else if (d < 1.4 && d > 1.35) {
    speed = 1150;
  } else if (d < 1.35 && d > 1.3) {
    speed = 1100;
  } else if (d < 1.3 && d > 1.25) {
    speed = 1050;
  } else if (d < 1.25 && d > 1.20) {
    speed = 1000;
  } else if (d < 1.2 && d > 1.15) {
    speed = 950;
  } else if (d < 1.15 && d > 1.10) {
    speed = 900;
  } else if (d < 1.10 && d > 1.05) {
    speed = 850;
  } else if (d < 1.10 && d > 1.05) {
    speed = 850;
  } else if (d < 1 && d > .8) {
    speed = 800;
  } else if (d < .8 && d > .75) {
    speed = 775;
  } else if (d < .75 && d > .7) {
    speed = 750;
  } else if (d < .7 && d > .65) {
    speed = 725;
  } else if (d < .65 && d > .6) {
    speed = 700;
  } else if (d < .6 && d > .55) {
    speed = 675;
  } else if (d < .55 && d > .5) {
    speed = 650;
  } else if (d < .5 && d > .45) {
    speed = 625;
  } else if (d < .45 && d > .4) {
    speed = 600;
  } else if (d < .4 && d > .35) {
    speed = 575;
  } else if (d < .35 && d > .3) {
    speed = 550;
  } else if (d < .3 && d > .25) {
    speed = 525;
  } else if (d < .25 && d > .2) {
    speed = 500;
  } else if (d < .2 && d > .15) {
    speed = 475;
  } else if (d < .15 && d > .1) {
    speed = 450;
  } else if (d < .05 && d > .01) {
    speed = 400;
  } else if (d < .01 && d > .08) {
    speed = 350;
  } else if (d < .08 && d > .07) {
    speed = 300;
  } else {
    speed = 100;
  }

  return speed;
};
