# How to run the project

(all of the below command must be used in a cmd)

## if you don't use docker 
you must install node and deno:
- https://nodejs.org/en
- https://deno.com

You must clone the project 
``` bash
git clone https://github.com/CyrilDemand/projet_cloud_aws
```

Go to the frontend folder
``` bash
cd frontend
```

download the dependencies using npm (Node Package Manager) which is installed with node
``` bash
npm i
```

``` bash
deno run dev
```

If everything went well you must be able to see the website : http://localhost:3000/

## if you have docker


``` bash
 docker build -t lamazon .
```

``` bash
docker run -d -p 3000:3000 lamazon
```

If everything went well you must be able to see the website : http://localhost:3000/