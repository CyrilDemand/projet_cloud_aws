# PowerShell script to package Lambda functions using Compress-Archive

# Set the paths to the Lambda functions
$lambdaPaths = @(
    "get_product",
    "list_products",
    "post_product"
    "delete_product"
)

# Loop through each Lambda path and create a .zip file
foreach ($lambdaPath in $lambdaPaths) {
    $lambdaSource = "$PSScriptRoot\$lambdaPath"  # Source path of the Lambda function
    $lambdaZip = "$PSScriptRoot\$lambdaPath\lambda_function.zip"  # Destination .zip file

    # Remove the existing .zip file if it exists
    if (Test-Path $lambdaZip) {
        Remove-Item $lambdaZip
    }

    # Create the .zip file from the Lambda source
    Compress-Archive -Path "$lambdaSource\*" -DestinationPath $lambdaZip

    Write-Host "Packaged $lambdaPath into $lambdaZip"
}

Write-Host "All Lambda functions have been packaged."