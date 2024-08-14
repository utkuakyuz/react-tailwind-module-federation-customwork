# Microfrontend with Module Federation and Tailwind CSS

This repository contains a microfrontend architecture built with React,Webpack, Module Federation, and Tailwind CSS. The project consists of two main applications:

1. **Host Application**: Serves as the main container that renders components from remote microfrontends.
2. **Layout Application**: Provides UI components (e.g., Header, Footer) that are dynamically loaded into the host application.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Applications](#running-the-applications) (Under Propgress)
- [Technical Details](#technical-details) (Under Propgress)
  - [Module Federation](#module-federation) (Under Propgress)
  - [Tailwind CSS Integration](#tailwind-css-integration) (Under Propgress)
- [Usage](#usage) (Under Propgress)
- [Contributing](#contributing) (Under Propgress)
- [License](#license) (Under Propgress)

## Overview

This project demonstrates a modern microfrontend approach using React and Webpack's Module Federation plugin. The architecture allows for the independent development and deployment of microfrontend applications while sharing common dependencies like React.

## Features

- **Modular Architecture**: Each microfrontend can be developed and deployed independently.
- **Dynamic Loading**: Microfrontends are dynamically loaded into the host application using Module Federation. (Under Progress)
- **Tailwind CSS with Scoped Styles**: Tailwind CSS is used for styling, with automatic prefixing to avoid class name collisions.
- **PostCSS Configuration**: Tailwind CSS is configured with PostCSS to automatically scope styles with a custom prefix.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (>= 14.x)
- npm (>= 6.x)

### Installation

Clone the repository and install the dependencies for each application:

```bash
git clone https://github.com/utkuakyuz/react-tailwind-module-federation-customwork.git
cd react-tailwind-module-federation-customwork

# Install dependencies for the host application
cd host
npm install

# Install dependencies for the layout application
cd ../layout
npm install
```
