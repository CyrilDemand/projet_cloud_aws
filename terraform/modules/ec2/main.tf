resource "aws_instance" "nextjs_instance" {
  count         = 2
  ami           = "ami-00d81861317c2cc1f"
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.subnet.id

  tags = {
    Name = "NextJS-EC2-${count.index}"
  }

  user_data = <<-EOF
              #!/bin/bash
              sudo apt update -y
              sudo apt install -y nodejs npm git
              
              # Install Deno
              curl -fsSL https://deno.land/x/install/install.sh | sh
              
              # Add Deno to the PATH
              export DENO_INSTALL="/home/ubuntu/.deno"
              export PATH="$DENO_INSTALL/bin:$PATH"
              
              # Clone the Git repository
              git clone https://github.com/CyrilDemand/projet_cloud_aws
              
              # Navigate into the directory
              cd projet_cloud_aws
              cd frontend
              
              # Install npm dependencies
              npm install
              
              # Run the application with Deno
              deno run dev
              EOF
}