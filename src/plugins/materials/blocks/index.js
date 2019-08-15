import members from './html/members.template.html'
import starter from './html/starter.template.html'
import login from './html/login.template.html'

export default (editor) => {
  const bm = editor.BlockManager;
  bm.add('starter', {
    id: 'starter',
    category: 'Section',
    label: 'Starter',
    content: starter,
    attributes: { class: 'fa fa-wpforms' }
  });

  bm.add('members', {
    id: 'members',
    label: 'Members',
    category: 'Section',
    content: members,
    attributes: { class: "fa fa-users" }
  });

  bm.add('login', {
    id: 'login',
    label: `Login`,
    category: 'Section',
    content: login,
    attributes: { class: "fa fa-bars" }
  })
}