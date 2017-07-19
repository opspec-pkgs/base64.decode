# Problem statement
decodes a base 64 encoded string per RFC4648

# Example usage

> note: in examples, VERSION represents a version of the base64.encode pkg

## install

```shell
opctl pkg install github.com/opspec-pkgs/base64.encode#VERSION
```

## run

```
opctl run github.com/opspec-pkgs/base64.encode#VERSION
```

## compose

```yaml
op:
  pkg: { ref: github.com/opspec-pkgs/base64.encode#VERSION }
  inputs:
    encodedValue:
  outputs:
    decodedValue:
```

# Support

join us on [![Slack](https://opspec-slackin.herokuapp.com/badge.svg)](https://opspec-slackin.herokuapp.com/)
or [open an issue](https://github.com/opspec-pkgs/base64.encode/issues)
