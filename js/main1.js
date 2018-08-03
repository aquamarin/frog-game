var tempStartingObject;
var startingObject = [
  {
    key : "green",
    value : "GF1",
    handleEvent:function () {
      document.getElementById('0').addEventListener('click', function(){
        moveFrog(tempStartingObject[0].key,tempStartingObject[0].value)},true)
    }
  },
  {
    key : "green",
    value : "GF2",
    handleEvent:function () {
      document.getElementById('1').addEventListener('click', function(){
        moveFrog(tempStartingObject[1].key,tempStartingObject[1].value)},true)
    }
  },
  {
    key : "green",
    value : "GF3",
    handleEvent:function () {
      document.getElementById('2').addEventListener('click', function(){
        moveFrog(tempStartingObject[2].key,tempStartingObject[2].value)},true)
    }
  },
  {
    key : "empty",
    value : "*",
    handleEvent:function () {
      document.getElementById('3').addEventListener('click', function(){
        moveFrog(tempStartingObject[3].key,tempStartingObject[3].value)},true)
    }
  },
  {
    key : "red",
    value : "RF1",
    handleEvent:function () {
      document.getElementById('4').addEventListener('click', function(){
        moveFrog(tempStartingObject[4].key,tempStartingObject[4].value)},true)
    }
  },
  {
    key : "red",
    value : "RF2",
    handleEvent:function () {
      document.getElementById('5').addEventListener('click', function(){
        moveFrog(tempStartingObject[5].key,tempStartingObject[5].value)},true)
    }
  },
  {
    key : "red",
    value : "RF3",
    handleEvent:function () {
      document.getElementById('6').addEventListener('click', function(){
        moveFrog(tempStartingObject[6].key,tempStartingObject[6].value)},true)
    }
  }
];
var resultObject = [
  {
    key : "red",
    value : "RF1",
    handleEvent:function () {
      document.getElementById('4').addEventListener('click', function(){
        moveFrog('red','RF1')},true)
    }
  },
  {
    key : "red",
    value : "RF2",
    handleEvent:function () {
      document.getElementById('5').addEventListener('click', function(){
        moveFrog('red','RF2')},true)
    }
  },
  {
    key : "red",
    value : "RF3",
    handleEvent:function () {
      document.getElementById('6').addEventListener('click', function(){
        moveFrog('red','RF3')},true)
    }
  },
  {
    key : "empty",
    value : "*",
    handleEvent:function () {
      document.getElementById('3').addEventListener('click', function(){
        moveFrog('empty','*')},true)
      }
  },
  {
    key : "green",
    value : "GF1",
    handleEvent:function () {
      document.getElementById('0').addEventListener('click', function(){
        moveFrog('green','GF1')},true)
      }
  },
  {
    key : "green",
    value : "GF2",
    handleEvent:function () {
      document.getElementById('1').addEventListener('click', function(){
        moveFrog('green','GF2')},true)
      }
  },
  {
    key : "green",
    value : "GF3",
    handleEvent:function () {
      document.getElementById('2').addEventListener('click', function(){
        console.log(1);
        moveFrog('green','GF3')},true)
    }
  }
];

function StartEvents(){
  for( i in this.startingObject)
    this.startingObject[i].handleEvent();
}
this.StartEvents();

this.tempStartingObject= this.startingObject;

function moveFrog(place,frog){
  var emptyPlace = findItem('empty','*');
  var frogPlace = findItem(place,frog);
  var distance = emptyPlace - frogPlace;
  //hareket kontrolü tamam
    if (distance < -2 || distance > 2) {
          alert("Bu hareketi yapamazsınız.");
      return;
    }
    if (place == "red" && frogPlace <= emptyPlace) {
          alert("Bu hareketi yapamazsınız.");
      return;
    }
    else if (place == "green" && frogPlace >= emptyPlace) {
          alert("Bu hareketi yapamazsınız.");
      return;
    }
  for ( key in this.startingObject) {
    if (frog==this.startingObject[frogPlace].value) {
        change(emptyPlace,frogPlace);
        break;
      }
    else {
          alert("Bu hareketi yapamazsınız.");
          return;
      }
    }
  this.tempStartingObject= this.startingObject;
  display();
}

function findItem(location,item){

  for( key in this.startingObject)
  {
    if(location == "green")
      return loop(item);
    else if(location == "red")
      return loop(item);
    else
      return loop(item);
  }
}
function loop(item) {
  for (var i = 0; i < this.startingObject.length - 1; i++) {
    if (this.startingObject[i].value == item) {
      break;
    }
  }
  return i;
}
function change(place1,place2) {
  var tempKey = this.startingObject[place1].key;
  this.startingObject[place1].key = this.startingObject[place2].key;
  this.startingObject[place2].key = tempKey;
  var tempValue = this.startingObject[place1].value;
  this.startingObject[place1].value = this.startingObject[place2].value;
  this.startingObject[place2].value = tempValue;
}
function display() {

    for (var j = 0; j < this.startingObject.length; j++) {
      document.getElementById(j).innerHTML =" <img src='../images/"
      +this.startingObject[j].key+".png' alt="
      + this.startingObject[j].key + " /> ";
    }
    var StartObject =JSON.stringify(this.startingObject);
    var finalObject = JSON.stringify(this.resultObject);
  if (StartObject === finalObject) {
    alert("Kazandınız ...");
    return;
  }
}
function Reset() {
  //reset tamam
  this.startingObject = [
    {
      key : "green",
      value : "GF1",
      handleEvent:function () {
        document.getElementById('0').addEventListener('click', function(){
          moveFrog(tempStartingObject[0].key,tempStartingObject[0].value)},true)
      }
    },
    {
      key : "green",
      value : "GF2",
      handleEvent:function () {
        document.getElementById('1').addEventListener('click', function(){
          moveFrog(tempStartingObject[1].key,tempStartingObject[1].value)},true)
      }
    },
    {
      key : "green",
      value : "GF3",
      handleEvent:function () {
        document.getElementById('2').addEventListener('click', function(){
          console.log(1);
          moveFrog(tempStartingObject[2].key,tempStartingObject[2].value)},true)
      }
    },
    {
      key : "empty",
      value : "*",
      handleEvent:function () {
        document.getElementById('3').addEventListener('click', function(){
          moveFrog(tempStartingObject[3].key,tempStartingObject[3].value)},true)
      }
    },
    {
      key : "red",
      value : "RF1",
      handleEvent:function () {
        document.getElementById('4').addEventListener('click', function(){
          moveFrog(tempStartingObject[4].key,tempStartingObject[4].value)},true)
      }
    },
    {
      key : "red",
      value : "RF2",
      handleEvent:function () {
        document.getElementById('5').addEventListener('click', function(){
          moveFrog(tempStartingObject[5].key,tempStartingObject[5].value)},true)
      }
    },
    {
      key : "red",
      value : "RF3",
      handleEvent:function () {
        document.getElementById('6').addEventListener('click', function(){
          moveFrog(tempStartingObject[6].key,tempStartingObject[6].value)},true)
      }
    }
  ];
  this.tempStartingObject= this.startingObject;
  display();
}
