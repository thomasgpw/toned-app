# App Module
### 1 IMPORTS
    - BrowserModule
### 1 EXPORTS
    - self

# App Component
## Smart Component (contains business logic)
### 0 INPUTS
### 1 OUTPUT
    - self (as HTML)
### 0 IMPLEMENTS
### 4 STATE VARIABLES
    - title
    - colorSelectionList (tied to ColorSelectionForm Component)
    - alteredImageCanvas (tied to ResultImage Component)
    - imageSourceCatalog (tied to ImageSelectionForm Component)
### 3 CHILD COMPONENTS
    - ResultImage
    - ColorSelectionForm
    - ImageSelectionForm
### 2 CHILD SERVICE
    - ImageManipulation
    - ImageSourceGetter

# ImageManipulation Service
### 0 INPUTS
### 1 OUTPUTS
    - alteredImageCanvas (from alterImage method)
### 0 IMPLEMENTS
### 2 STATE VARIABLES
    - hiddenCanvas
    - alteredImageCanvas
### 2 METHODS
    - setImage(unalteredImage, colorSelectionList) returns alteredImageCanvas
    - alterImage(colorSelectionList) returns alteredImageCanvas

# ImageSourceGetter Service
### 0 INPUTS
### 1 OUTPUT
    - imageSourceCatalog (from getImageSources method)
### 0 IMPLEMENTS
### 1 STATE VARIABLES
    - IMAGE_SOURCE_PATHS (constant)
### 1 METHODS
    - getImageSources() returns imageSourceCatalog