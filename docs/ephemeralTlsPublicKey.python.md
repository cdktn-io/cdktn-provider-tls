# `ephemeralTlsPublicKey` Submodule <a name="`ephemeralTlsPublicKey` Submodule" id="@cdktn/provider-tls.ephemeralTlsPublicKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralTlsPublicKey <a name="EphemeralTlsPublicKey" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.4.0/docs/ephemeral-resources/public_key tls_public_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer"></a>

```python
from cdktn_provider_tls import ephemeral_tls_public_key

ephemeralTlsPublicKey.EphemeralTlsPublicKey(
  scope: Construct,
  id: str,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  private_key_openssh: str = None,
  private_key_pem: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.privateKeyOpenssh">private_key_openssh</a></code> | <code>str</code> | The private key (in  [OpenSSH PEM (RFC 4716)](https://datatracker.ietf.org/doc/html/rfc4716) format) to extract the public key from. This is _mutually exclusive_ with `private_key_pem`. Currently-supported algorithms for keys are: `RSA`, `ECDSA`, `ED25519`. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.privateKeyPem">private_key_pem</a></code> | <code>str</code> | The private key (in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format) to extract the public key from. This is _mutually exclusive_ with `private_key_openssh`. Currently-supported algorithms for keys are: `RSA`, `ECDSA`, `ED25519`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `private_key_openssh`<sup>Optional</sup> <a name="private_key_openssh" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.privateKeyOpenssh"></a>

- *Type:* str

The private key (in  [OpenSSH PEM (RFC 4716)](https://datatracker.ietf.org/doc/html/rfc4716) format) to extract the public key from. This is _mutually exclusive_ with `private_key_pem`. Currently-supported algorithms for keys are: `RSA`, `ECDSA`, `ED25519`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.4.0/docs/ephemeral-resources/public_key#private_key_openssh EphemeralTlsPublicKey#private_key_openssh}

---

##### `private_key_pem`<sup>Optional</sup> <a name="private_key_pem" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.privateKeyPem"></a>

- *Type:* str

The private key (in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format) to extract the public key from. This is _mutually exclusive_ with `private_key_openssh`. Currently-supported algorithms for keys are: `RSA`, `ECDSA`, `ED25519`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.4.0/docs/ephemeral-resources/public_key#private_key_pem EphemeralTlsPublicKey#private_key_pem}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.toTerraform">to_terraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.resetPrivateKeyOpenssh">reset_private_key_openssh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.resetPrivateKeyPem">reset_private_key_pem</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this ephemeral resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_private_key_openssh` <a name="reset_private_key_openssh" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.resetPrivateKeyOpenssh"></a>

```python
def reset_private_key_openssh() -> None
```

##### `reset_private_key_pem` <a name="reset_private_key_pem" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.resetPrivateKeyPem"></a>

```python
def reset_private_key_pem() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isTerraformEphemeralResource">is_terraform_ephemeral_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isConstruct"></a>

```python
from cdktn_provider_tls import ephemeral_tls_public_key

ephemeralTlsPublicKey.EphemeralTlsPublicKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isTerraformElement"></a>

```python
from cdktn_provider_tls import ephemeral_tls_public_key

ephemeralTlsPublicKey.EphemeralTlsPublicKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_ephemeral_resource` <a name="is_terraform_ephemeral_resource" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isTerraformEphemeralResource"></a>

```python
from cdktn_provider_tls import ephemeral_tls_public_key

ephemeralTlsPublicKey.EphemeralTlsPublicKey.is_terraform_ephemeral_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.publicKeyFingerprintMd5">public_key_fingerprint_md5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.publicKeyFingerprintSha256">public_key_fingerprint_sha256</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.publicKeyOpenssh">public_key_openssh</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.publicKeyPem">public_key_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.privateKeyOpensshInput">private_key_openssh_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.privateKeyPemInput">private_key_pem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.privateKeyOpenssh">private_key_openssh</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.privateKeyPem">private_key_pem</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `public_key_fingerprint_md5`<sup>Required</sup> <a name="public_key_fingerprint_md5" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.publicKeyFingerprintMd5"></a>

```python
public_key_fingerprint_md5: str
```

- *Type:* str

---

##### `public_key_fingerprint_sha256`<sup>Required</sup> <a name="public_key_fingerprint_sha256" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.publicKeyFingerprintSha256"></a>

```python
public_key_fingerprint_sha256: str
```

- *Type:* str

---

##### `public_key_openssh`<sup>Required</sup> <a name="public_key_openssh" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.publicKeyOpenssh"></a>

```python
public_key_openssh: str
```

- *Type:* str

---

##### `public_key_pem`<sup>Required</sup> <a name="public_key_pem" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.publicKeyPem"></a>

```python
public_key_pem: str
```

- *Type:* str

---

##### `private_key_openssh_input`<sup>Optional</sup> <a name="private_key_openssh_input" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.privateKeyOpensshInput"></a>

```python
private_key_openssh_input: str
```

- *Type:* str

---

##### `private_key_pem_input`<sup>Optional</sup> <a name="private_key_pem_input" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.privateKeyPemInput"></a>

```python
private_key_pem_input: str
```

- *Type:* str

---

##### `private_key_openssh`<sup>Required</sup> <a name="private_key_openssh" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.privateKeyOpenssh"></a>

```python
private_key_openssh: str
```

- *Type:* str

---

##### `private_key_pem`<sup>Required</sup> <a name="private_key_pem" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.privateKeyPem"></a>

```python
private_key_pem: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralTlsPublicKeyConfig <a name="EphemeralTlsPublicKeyConfig" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.Initializer"></a>

```python
from cdktn_provider_tls import ephemeral_tls_public_key

ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig(
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  private_key_openssh: str = None,
  private_key_pem: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.privateKeyOpenssh">private_key_openssh</a></code> | <code>str</code> | The private key (in  [OpenSSH PEM (RFC 4716)](https://datatracker.ietf.org/doc/html/rfc4716) format) to extract the public key from. This is _mutually exclusive_ with `private_key_pem`. Currently-supported algorithms for keys are: `RSA`, `ECDSA`, `ED25519`. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.privateKeyPem">private_key_pem</a></code> | <code>str</code> | The private key (in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format) to extract the public key from. This is _mutually exclusive_ with `private_key_openssh`. Currently-supported algorithms for keys are: `RSA`, `ECDSA`, `ED25519`. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `private_key_openssh`<sup>Optional</sup> <a name="private_key_openssh" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.privateKeyOpenssh"></a>

```python
private_key_openssh: str
```

- *Type:* str

The private key (in  [OpenSSH PEM (RFC 4716)](https://datatracker.ietf.org/doc/html/rfc4716) format) to extract the public key from. This is _mutually exclusive_ with `private_key_pem`. Currently-supported algorithms for keys are: `RSA`, `ECDSA`, `ED25519`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.4.0/docs/ephemeral-resources/public_key#private_key_openssh EphemeralTlsPublicKey#private_key_openssh}

---

##### `private_key_pem`<sup>Optional</sup> <a name="private_key_pem" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.privateKeyPem"></a>

```python
private_key_pem: str
```

- *Type:* str

The private key (in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format) to extract the public key from. This is _mutually exclusive_ with `private_key_openssh`. Currently-supported algorithms for keys are: `RSA`, `ECDSA`, `ED25519`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.4.0/docs/ephemeral-resources/public_key#private_key_pem EphemeralTlsPublicKey#private_key_pem}

---



