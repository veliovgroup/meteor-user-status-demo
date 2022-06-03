import { Meteor } from 'meteor/meteor';
import { UserStatus } from 'meteor/ostrio:user-status';

const userStatus = new UserStatus();

Meteor.startup(() => {
  // code to run on server at startup
});
