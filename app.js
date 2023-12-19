let arr = [
    {
        brand: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        image_url: "https://i.imgur.com/U024xLQ.jpeg"
        
    },
    {
        brand: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        image_url: "https://i.imgur.com/oToiI0g.jpeg"
        
    },
    {
        brand: "Samsung",
        model: "SamsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        image_url: "https://i.imgur.com/2Iu7WMq.jpeg"
        
    },
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb",
        image_url: "https://i.imgur.com/DKroAUq.jpeg"
        
    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom : "32gb",
        image_url: "https://i.imgur.com/U6cV933.jpeg"
        
    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb",
        image_url: "https://i.imgur.com/U6cV933.jpeg"
        
    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom : "32gb",
        image_url: "https://i.imgur.com/JCjkiXi.jpeg"
        
    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        image_url: "https://i.imgur.com/G0AVI8Y.jpeg"
        
    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        image_url: "https://i.imgur.com/uJ0OcUp.jpeg"
        
    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        image_url: "https://i.imgur.com/LJUWFzD.jpeg"
        
    },
]


// adding switcher and it's input field

var switcher = document.getElementById("switcher-ref");

switcher.innerHTML = `<select id="switcher">
<option value="brand">Brand</option>
<option value="model">Model</option>
<option value="price">Price</option>
<option value="camera">Camera</option>
<option value="ram">Ram</option>
<option value="rom">Rom</option>
</select>
<input type="text" id="switcher-val" value="" placeholder="Enter Query..." />
<button onclick="checkVal()">Find</button>`;

// let's capture the selected option value and input value
var select = document.getElementById('switcher');
var input = document.getElementById("switcher-val")



// let's capture the container div to collect data
var container = document.getElementById("container")
function checkVal() {
    // let's empty the html area before filteration
    container.innerHTML = '';

// let's filter the results using filter method of array
const filtered_array = arr.filter((current_obj, current_index)=> {
    if (current_obj.brand === input.value || current_obj.model === input.value || current_obj.price === input.value || current_obj.camera === input.value || current_obj.ram === input.value || current_obj.rom === input.value) {
//        return container.innerHTML += `${current_obj.brand}, ${current_obj.model}, ${current_obj.price}, ${current_obj.camera}, ${current_obj.ram}, ${current_obj.rom}`;
return container.innerHTML += `<div class="col-md-4">
<div class="card mt-3">
<img class="card-img-top" src="${current_obj.image_url}" class="card-img-top" alt="${current_obj.model}" />
<div class="card-body">
  <h5 style="color:green" class="card-subtitle">${current_obj.brand}</h5>
  <h4 class="card-subtitle">${current_obj.model}</h4><br />
  <p class="card-text"><strong>Camera:</strong> ${current_obj.camera}</p>
  <p class="card-text"><strong>RAM:</strong> ${current_obj.ram}</p>
  <p class="card-text"><strong>ROM:</strong> ${current_obj.rom}</p>
  <p class="card-text" style="color:blue;font-weight:bold;">PKR ${current_obj.price}.00</p>
  <button type="button" class="btn btn-success">Details</button>
</div>
</div></div>`;

    }
});
    }
