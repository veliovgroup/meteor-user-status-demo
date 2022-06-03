import { Tracker }     from 'meteor/tracker';
import { Template }    from 'meteor/templating';
import { UserStatus }  from 'meteor/ostrio:user-status';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

const userStatus = new UserStatus({
  idleTimeout: 5000
});

Tracker.autorun(function () {
  console.log(userStatus.status.get());
});

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  status() {
    return userStatus.status.get();
  },
  meteorStatus() {
    return Meteor.status();
  }
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
