# sherry-move

light dom move or transformation plug-in
## Install


By npm:

```
npm install sherry-move
```

## Usage

| arguments | Description | defaultvalue | type |
| :---: | --- | --- | --- |
| dom | target dom | - | object |
| json | information of this transform,like{ 'width' : '200', 'height' : '150' , 'speed' : '6'}| - | json |
| callback | callback | null | function |

### Use with HTML &lt;script&gt; tag:

```
<script src="/node_modules/sherry-move/dist/sherryMove.js"></script>
```

other js field you can write:

```
<script>
  	startMove(dom, {"width": "300"}, callback)
</script>
```


### Use with npm:

```
import startMove from "sherry-move";
...
startMove(dom, {"width": "300"}, callback)
```

## Tips

- startMove's returned value is the dom moved.
- json.speed belong to1-10 (more bigger more slower)

