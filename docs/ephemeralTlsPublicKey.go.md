# `ephemeralTlsPublicKey` Submodule <a name="`ephemeralTlsPublicKey` Submodule" id="@cdktn/provider-tls.ephemeralTlsPublicKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralTlsPublicKey <a name="EphemeralTlsPublicKey" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/ephemeral-resources/public_key tls_public_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-tls-go/tls/v14/ephemeraltlspublickey"

ephemeraltlspublickey.NewEphemeralTlsPublicKey(scope Construct, id *string, config EphemeralTlsPublicKeyConfig) EphemeralTlsPublicKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig">EphemeralTlsPublicKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig">EphemeralTlsPublicKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.resetPrivateKeyOpenssh">ResetPrivateKeyOpenssh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.resetPrivateKeyPem">ResetPrivateKeyPem</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetPrivateKeyOpenssh` <a name="ResetPrivateKeyOpenssh" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.resetPrivateKeyOpenssh"></a>

```go
func ResetPrivateKeyOpenssh()
```

##### `ResetPrivateKeyPem` <a name="ResetPrivateKeyPem" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.resetPrivateKeyPem"></a>

```go
func ResetPrivateKeyPem()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-tls-go/tls/v14/ephemeraltlspublickey"

ephemeraltlspublickey.EphemeralTlsPublicKey_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-tls-go/tls/v14/ephemeraltlspublickey"

ephemeraltlspublickey.EphemeralTlsPublicKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isTerraformEphemeralResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-tls-go/tls/v14/ephemeraltlspublickey"

ephemeraltlspublickey.EphemeralTlsPublicKey_IsTerraformEphemeralResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.publicKeyFingerprintMd5">PublicKeyFingerprintMd5</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.publicKeyFingerprintSha256">PublicKeyFingerprintSha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.publicKeyOpenssh">PublicKeyOpenssh</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.publicKeyPem">PublicKeyPem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.privateKeyOpensshInput">PrivateKeyOpensshInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.privateKeyPemInput">PrivateKeyPemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.privateKeyOpenssh">PrivateKeyOpenssh</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.privateKeyPem">PrivateKeyPem</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PublicKeyFingerprintMd5`<sup>Required</sup> <a name="PublicKeyFingerprintMd5" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.publicKeyFingerprintMd5"></a>

```go
func PublicKeyFingerprintMd5() *string
```

- *Type:* *string

---

##### `PublicKeyFingerprintSha256`<sup>Required</sup> <a name="PublicKeyFingerprintSha256" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.publicKeyFingerprintSha256"></a>

```go
func PublicKeyFingerprintSha256() *string
```

- *Type:* *string

---

##### `PublicKeyOpenssh`<sup>Required</sup> <a name="PublicKeyOpenssh" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.publicKeyOpenssh"></a>

```go
func PublicKeyOpenssh() *string
```

- *Type:* *string

---

##### `PublicKeyPem`<sup>Required</sup> <a name="PublicKeyPem" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.publicKeyPem"></a>

```go
func PublicKeyPem() *string
```

- *Type:* *string

---

##### `PrivateKeyOpensshInput`<sup>Optional</sup> <a name="PrivateKeyOpensshInput" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.privateKeyOpensshInput"></a>

```go
func PrivateKeyOpensshInput() *string
```

- *Type:* *string

---

##### `PrivateKeyPemInput`<sup>Optional</sup> <a name="PrivateKeyPemInput" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.privateKeyPemInput"></a>

```go
func PrivateKeyPemInput() *string
```

- *Type:* *string

---

##### `PrivateKeyOpenssh`<sup>Required</sup> <a name="PrivateKeyOpenssh" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.privateKeyOpenssh"></a>

```go
func PrivateKeyOpenssh() *string
```

- *Type:* *string

---

##### `PrivateKeyPem`<sup>Required</sup> <a name="PrivateKeyPem" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.privateKeyPem"></a>

```go
func PrivateKeyPem() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralTlsPublicKeyConfig <a name="EphemeralTlsPublicKeyConfig" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-tls-go/tls/v14/ephemeraltlspublickey"

&ephemeraltlspublickey.EphemeralTlsPublicKeyConfig {
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	PrivateKeyOpenssh: *string,
	PrivateKeyPem: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.privateKeyOpenssh">PrivateKeyOpenssh</a></code> | <code>*string</code> | The private key (in  [OpenSSH PEM (RFC 4716)](https://datatracker.ietf.org/doc/html/rfc4716) format) to extract the public key from. This is _mutually exclusive_ with `private_key_pem`. Currently-supported algorithms for keys are: `RSA`, `ECDSA`, `ED25519`. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.privateKeyPem">PrivateKeyPem</a></code> | <code>*string</code> | The private key (in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format) to extract the public key from. This is _mutually exclusive_ with `private_key_openssh`. Currently-supported algorithms for keys are: `RSA`, `ECDSA`, `ED25519`. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `PrivateKeyOpenssh`<sup>Optional</sup> <a name="PrivateKeyOpenssh" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.privateKeyOpenssh"></a>

```go
PrivateKeyOpenssh *string
```

- *Type:* *string

The private key (in  [OpenSSH PEM (RFC 4716)](https://datatracker.ietf.org/doc/html/rfc4716) format) to extract the public key from. This is _mutually exclusive_ with `private_key_pem`. Currently-supported algorithms for keys are: `RSA`, `ECDSA`, `ED25519`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/ephemeral-resources/public_key#private_key_openssh EphemeralTlsPublicKey#private_key_openssh}

---

##### `PrivateKeyPem`<sup>Optional</sup> <a name="PrivateKeyPem" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.privateKeyPem"></a>

```go
PrivateKeyPem *string
```

- *Type:* *string

The private key (in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format) to extract the public key from. This is _mutually exclusive_ with `private_key_openssh`. Currently-supported algorithms for keys are: `RSA`, `ECDSA`, `ED25519`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/ephemeral-resources/public_key#private_key_pem EphemeralTlsPublicKey#private_key_pem}

---



