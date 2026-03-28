function volume_sphere() {
    //Write your code here
	function volume_sphere() {
    // Step 1: Get radius value from input
    let radius = document.getElementById("radius").value;

    // Step 2: Convert input to number
    radius = parseFloat(radius);

    // Step 3: Validate input (non-negative number)
    if (isNaN(radius) || radius < 0) {
        document.getElementById("volume").value = "NaN";
        return false; // prevent form submission
    }

    // Step 4: Calculate volume
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Step 5: Round to 4 decimal places
    volume = volume.toFixed(4);

    // Step 6: Display result
    document.getElementById("volume").value = volume;

    return false; // prevent page reload
}
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
