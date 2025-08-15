// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navigation bar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        projects.forEach(project => {
            if (filter === 'all') {
                project.style.display = 'block';
            } else {
                const categories = project.getAttribute('data-category').split(' ');
                if (categories.includes(filter)) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            }
        });
    });
});

// Project Modal
const modal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.querySelector('.close');
const viewButtons = document.querySelectorAll('.view-details');

const projectDetails = {
    axi: {
        title: 'AXI4-Lite Slave Interface',
        description: `
            <h3>Project Overview</h3>
            <p>Designed and implemented an AXI4-Lite slave peripheral interface with complete verification environment.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li>Full AXI4-Lite protocol compliance</li>
                <li>Configurable address and data width</li>
                <li>UVM-based verification environment</li>
                <li>100% functional coverage achievement</li>
            </ul>
            
            <h3>Technical Details</h3>
            <ul>
                <li>RTL Design: Verilog HDL</li>
                <li>Verification: SystemVerilog & UVM</li>
                <li>Simulation Tool: QuestaSim</li>
                <li>Coverage: Functional & Code Coverage</li>
            </ul>
            
            <div class="project-images">
                <img src="images/axi-block-diagram.jpg" alt="AXI Block Diagram">
                <img src="images/axi-waveform.jpg" alt="Simulation Waveform">
            </div>
        `
    },
    amplifier: {
        title: 'CMOS Amplifier Design (130nm)',
        description: `
            <h3>Project Overview</h3>
            <p>Designed and optimized a single-stage CMOS amplifier in 130nm technology.</p>
            
            <h3>Specifications</h3>
            <ul>
                <li>Gain: 40dB</li>
                <li>Bandwidth: 100MHz</li>
                <li>Power Consumption: < 1mW</li>
                <li>Supply Voltage: 1.2V</li>
            </ul>
            
            <h3>Design Process</h3>
            <ul>
                <li>Schematic design in Cadence Virtuoso</li>
                <li>DC operating point analysis</li>
                <li>AC analysis for frequency response</li>
                <li>Transient analysis for time-domain behavior</li>
            </ul>
            
            <div class="project-images">
                <img src="images/circuit-schematic.jpg" alt="Circuit Schematic">
                <img src="images/frequency-response.jpg" alt="Frequency Response">
            </div>
        `
    },
    counter: {
        title: 'Digital Counter with UVM Verification',
        description: `
            <h3>Project Overview</h3>
            <p>Implemented a configurable synchronous up-counter with comprehensive UVM verification.</p>
            
            <h3>Features</h3>
            <ul>
                <li>Configurable bit width</li>
                <li>Synchronous reset</li>
                <li>Enable control</li>
                <li>Overflow flag</li>
            </ul>
            
            <h3>Verification Environment</h3>
            <ul>
                <li>UVM testbench architecture</li>
                <li>Functional coverage metrics</li>
                <li>Assertions for protocol checking</li>
                <li>Random stimulus generation</li>
            </ul>
            
            <div class="project-images">
                <img src="images/counter-diagram.jpg" alt="Counter Block Diagram">
                <img src="images/coverage-report.jpg" alt="Coverage Report">
            </div>
        `
    }
};

viewButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const project = button.getAttribute('data-project');
        const details = projectDetails[project];
        
        modalContent.innerHTML = `
            <h2>${details.title}</h2>
            ${details.description}
        `;
        
        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
