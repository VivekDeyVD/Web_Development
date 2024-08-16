document.getElementById("page3-leftbox").addEventListener("click", function() {
    const originalContent = this.getAttribute('data-original-content');
    
    if (this.classList.contains("zoomed-out")) {
        // Revert to original size and content
        this.classList.remove("zoomed-out");
        this.innerHTML = originalContent;
    } else {
        // Store the original content
        this.setAttribute('data-original-content', this.innerHTML);

        // Zoom out and change the content
        this.classList.add("zoomed-out");

        this.innerHTML = ''; // Clear the current content

        // Add new content
        const newParagraph = document.createElement("p");
        newParagraph.innerHTML = 'Creativity meets new efficiency. Our solutions cut costs and boost performance.';
        this.appendChild(newParagraph);
    }
});
