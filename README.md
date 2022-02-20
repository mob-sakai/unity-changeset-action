# [GitHub Action] Unity Changeset

![](https://github.com/mob-sakai/unity-changeset-action/workflows/units-test/badge.svg)

Get changeset value for specific Unity editor version.

# Usage

```yaml
- uses: mob-sakai/unity-changeset@v1
  id: unity-changeset
  with:
    # (Required) The version of Unity editor. For example, 2021.2.12f1
    unityVersion: '2021.2.12f1'

# Use changeset value in later steps 
- run: |
    echo '${{ steps.unity-changeset.outputs.changeset }}'
    # 48b1aa000234
```
