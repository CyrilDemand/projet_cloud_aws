resource "aws_vpc" "ecomm-vpc" {
  cidr_block = "10.0.0.0/16"

  tags = {
    Name = "my-vpc"
  }
}

resource "aws_subnet" "public_subnet_a" {
  vpc_id            = aws_vpc.ecomm-vpc.id
  cidr_block        = "10.0.1.0/24"
  availability_zone = "eu-west-3a"
  map_public_ip_on_launch = true

  tags = {
    Name = "public_subnet_a"
  }
}

resource "aws_subnet" "public_subnet_b" {
  vpc_id            = aws_vpc.ecomm-vpc.id
  cidr_block        = "10.0.3.0/24"
  availability_zone = "eu-west-3b"
  map_public_ip_on_launch = true

  tags = {
    Name = "public_subnet_b"
  }
}

resource "aws_subnet" "private_subnet_a" {
  vpc_id            = aws_vpc.ecomm-vpc.id
  cidr_block        = "10.0.2.0/24"
  availability_zone = "eu-west-3a"

  tags = {
    Name = "private_subnet_a"
  }
}

resource "aws_subnet" "private_subnet_b" {
  vpc_id            = aws_vpc.ecomm-vpc.id
  cidr_block        = "10.0.4.0/24"
  availability_zone = "eu-west-3b"

  tags = {
    Name = "private_subnet_b"
  }
}

resource "aws_internet_gateway" "ecomm_gateway" {
  vpc_id = aws_vpc.ecomm-vpc.id

  tags = {
    Name = "ecomm-gateway"
  }
}

resource "aws_route_table" "public_ecomm_route_table" {
  vpc_id = aws_vpc.ecomm-vpc.id

  tags = {
    Name = "ecomm-route-table"
  }
}

resource "aws_route" "internet_access" {
  route_table_id         = aws_route_table.public_ecomm_route_table.id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.ecomm_gateway.id
}

resource "aws_route_table_association" "public_association_a" {
  subnet_id      = aws_subnet.public_subnet_a.id
  route_table_id = aws_route_table.public_ecomm_route_table.id
}

resource "aws_route_table_association" "public_association_b" {
  subnet_id      = aws_subnet.public_subnet_b.id
  route_table_id = aws_route_table.public_ecomm_route_table.id
}