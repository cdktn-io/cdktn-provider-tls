# `ephemeralTlsPrivateKey` Submodule <a name="`ephemeralTlsPrivateKey` Submodule" id="@cdktn/provider-tls.ephemeralTlsPrivateKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralTlsPrivateKey <a name="EphemeralTlsPrivateKey" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/ephemeral-resources/private_key tls_private_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer"></a>

```python
from cdktn_provider_tls import ephemeral_tls_private_key

ephemeralTlsPrivateKey.EphemeralTlsPrivateKey(
  scope: Construct,
  id: str,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  algorithm: str,
  ecdsa_curve: str = None,
  rsa_bits: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.algorithm">algorithm</a></code> | <code>str</code> | Name of the algorithm to use when generating the private key. Currently-supported values are: `RSA`, `ECDSA`, `ED25519`. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.ecdsaCurve">ecdsa_curve</a></code> | <code>str</code> | When `algorithm` is `ECDSA`, the name of the elliptic curve to use. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.rsaBits">rsa_bits</a></code> | <code>typing.Union[int, float]</code> | When `algorithm` is `RSA`, the size of the generated RSA key, in bits (default: `2048`). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.algorithm"></a>

- *Type:* str

Name of the algorithm to use when generating the private key. Currently-supported values are: `RSA`, `ECDSA`, `ED25519`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/ephemeral-resources/private_key#algorithm EphemeralTlsPrivateKey#algorithm}

---

##### `ecdsa_curve`<sup>Optional</sup> <a name="ecdsa_curve" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.ecdsaCurve"></a>

- *Type:* str

When `algorithm` is `ECDSA`, the name of the elliptic curve to use.

Currently-supported values are: `P224`, `P256`, `P384`, `P521`. (default: `P224`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/ephemeral-resources/private_key#ecdsa_curve EphemeralTlsPrivateKey#ecdsa_curve}

---

##### `rsa_bits`<sup>Optional</sup> <a name="rsa_bits" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.rsaBits"></a>

- *Type:* typing.Union[int, float]

When `algorithm` is `RSA`, the size of the generated RSA key, in bits (default: `2048`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/ephemeral-resources/private_key#rsa_bits EphemeralTlsPrivateKey#rsa_bits}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.toTerraform">to_terraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.resetEcdsaCurve">reset_ecdsa_curve</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.resetRsaBits">reset_rsa_bits</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this ephemeral resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_ecdsa_curve` <a name="reset_ecdsa_curve" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.resetEcdsaCurve"></a>

```python
def reset_ecdsa_curve() -> None
```

##### `reset_rsa_bits` <a name="reset_rsa_bits" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.resetRsaBits"></a>

```python
def reset_rsa_bits() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isTerraformEphemeralResource">is_terraform_ephemeral_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isConstruct"></a>

```python
from cdktn_provider_tls import ephemeral_tls_private_key

ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isTerraformElement"></a>

```python
from cdktn_provider_tls import ephemeral_tls_private_key

ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_ephemeral_resource` <a name="is_terraform_ephemeral_resource" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isTerraformEphemeralResource"></a>

```python
from cdktn_provider_tls import ephemeral_tls_private_key

ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.is_terraform_ephemeral_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.privateKeyOpenssh">private_key_openssh</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.privateKeyPem">private_key_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.privateKeyPemPkcs8">private_key_pem_pkcs8</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyFingerprintMd5">public_key_fingerprint_md5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyFingerprintSha256">public_key_fingerprint_sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyOpenssh">public_key_openssh</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyPem">public_key_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.ecdsaCurveInput">ecdsa_curve_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.rsaBitsInput">rsa_bits_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.ecdsaCurve">ecdsa_curve</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.rsaBits">rsa_bits</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `private_key_openssh`<sup>Required</sup> <a name="private_key_openssh" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.privateKeyOpenssh"></a>

```python
private_key_openssh: str
```

- *Type:* str

---

##### `private_key_pem`<sup>Required</sup> <a name="private_key_pem" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.privateKeyPem"></a>

```python
private_key_pem: str
```

- *Type:* str

---

##### `private_key_pem_pkcs8`<sup>Required</sup> <a name="private_key_pem_pkcs8" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.privateKeyPemPkcs8"></a>

```python
private_key_pem_pkcs8: str
```

- *Type:* str

---

##### `public_key_fingerprint_md5`<sup>Required</sup> <a name="public_key_fingerprint_md5" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyFingerprintMd5"></a>

```python
public_key_fingerprint_md5: str
```

- *Type:* str

---

##### `public_key_fingerprint_sha256`<sup>Required</sup> <a name="public_key_fingerprint_sha256" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyFingerprintSha256"></a>

```python
public_key_fingerprint_sha256: str
```

- *Type:* str

---

##### `public_key_openssh`<sup>Required</sup> <a name="public_key_openssh" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyOpenssh"></a>

```python
public_key_openssh: str
```

- *Type:* str

---

##### `public_key_pem`<sup>Required</sup> <a name="public_key_pem" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyPem"></a>

```python
public_key_pem: str
```

- *Type:* str

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `ecdsa_curve_input`<sup>Optional</sup> <a name="ecdsa_curve_input" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.ecdsaCurveInput"></a>

```python
ecdsa_curve_input: str
```

- *Type:* str

---

##### `rsa_bits_input`<sup>Optional</sup> <a name="rsa_bits_input" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.rsaBitsInput"></a>

```python
rsa_bits_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `ecdsa_curve`<sup>Required</sup> <a name="ecdsa_curve" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.ecdsaCurve"></a>

```python
ecdsa_curve: str
```

- *Type:* str

---

##### `rsa_bits`<sup>Required</sup> <a name="rsa_bits" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.rsaBits"></a>

```python
rsa_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralTlsPrivateKeyConfig <a name="EphemeralTlsPrivateKeyConfig" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.Initializer"></a>

```python
from cdktn_provider_tls import ephemeral_tls_private_key

ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig(
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  algorithm: str,
  ecdsa_curve: str = None,
  rsa_bits: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.algorithm">algorithm</a></code> | <code>str</code> | Name of the algorithm to use when generating the private key. Currently-supported values are: `RSA`, `ECDSA`, `ED25519`. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.ecdsaCurve">ecdsa_curve</a></code> | <code>str</code> | When `algorithm` is `ECDSA`, the name of the elliptic curve to use. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.rsaBits">rsa_bits</a></code> | <code>typing.Union[int, float]</code> | When `algorithm` is `RSA`, the size of the generated RSA key, in bits (default: `2048`). |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

Name of the algorithm to use when generating the private key. Currently-supported values are: `RSA`, `ECDSA`, `ED25519`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/ephemeral-resources/private_key#algorithm EphemeralTlsPrivateKey#algorithm}

---

##### `ecdsa_curve`<sup>Optional</sup> <a name="ecdsa_curve" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.ecdsaCurve"></a>

```python
ecdsa_curve: str
```

- *Type:* str

When `algorithm` is `ECDSA`, the name of the elliptic curve to use.

Currently-supported values are: `P224`, `P256`, `P384`, `P521`. (default: `P224`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/ephemeral-resources/private_key#ecdsa_curve EphemeralTlsPrivateKey#ecdsa_curve}

---

##### `rsa_bits`<sup>Optional</sup> <a name="rsa_bits" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.rsaBits"></a>

```python
rsa_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

When `algorithm` is `RSA`, the size of the generated RSA key, in bits (default: `2048`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/ephemeral-resources/private_key#rsa_bits EphemeralTlsPrivateKey#rsa_bits}

---



