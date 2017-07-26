# move

html dom move or transformation
## Install


By npm:

```
npm install sherry-move
```

## Usage

| arguments | Description | defaultvalue | type |
| :---: | --- | --- | --- |
| dom | target dom | ng ... | object |
| json | information of this transform,like{ 'width' : '200', 'height' : '150' , 'speed' : '6'}| json |
| callback | callback | null | function |

### Use with HTML &lt;script&gt; tag:

```
<script src="/node_modules/sherry-move/dist/sherryMove"></script>
```

other js field you can write:

```
<script>
  	startMove(dom, {"width": "300"}, callback)
</script>
```


### Use with npm:

```
import startMove from "../myPackages/sherry-move";
...
startMove(dom, {"width": "300"}, callback)
```

## Tips

- startMove's returned value is the dom moved.
- json.speed belong to1-10 (more bigger more slower)

