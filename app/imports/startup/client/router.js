import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/section-list', {
  name: 'Section_List_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Section_List_Page' });
  },
});

FlowRouter.route('/create-section', {
  name: 'Create_Section_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Create_Section_Page' });
  },
});

FlowRouter.route('/edit-section/:id', {
  name: 'Edit_Section_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Section_Page' });
  },
});

FlowRouter.route('/stuff/:_id', {
  name: 'Edit_Stuff_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Stuff_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
