    Template.Page1.helpers({
      vala:function(){
        return Session.get('vala');
      }
    });
    Template.Page2.helpers({
      valb:function(){
        return Session.get('valb');
      }
    });
      Template.Page3.helpers({
      Sumofval:function(){
        return Session.get('Sumofval');
      }
    });

    Template.Page1.events ({
        'submit .class1':function(e){
          e.preventDefault();
          a=e.target.page1.value;
          Session.set('vala',a);
          Router.go('Page2');
          }
     });
     Template.Page2.events ({
         'submit .class2':function(e){
           e.preventDefault();
           b=e.target.page2.value;
           sum=parseInt(a)+parseInt(b);
           Session.set('valb',b);
            alert('b=' +b);
           Session.set('Sumofval' ,sum)
           alert('sum=' +sum);
           Router.go('Page3');
           }
      });

Router.route('/', {
    template: 'Page1'
});

Router.route('Page2',
{
  data:function()
  {
    return {
      vala : a
  }
  }
});
Router.route('Page3',
{
  data:function()
  {
    return {
      vala : a,
      valb : b,
      sumofval : sum
  }
  }
});
