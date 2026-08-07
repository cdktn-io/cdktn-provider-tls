# `ephemeralTlsPrivateKey` Submodule <a name="`ephemeralTlsPrivateKey` Submodule" id="@cdktn/provider-tls.ephemeralTlsPrivateKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralTlsPrivateKey <a name="EphemeralTlsPrivateKey" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/ephemeral-resources/private_key tls_private_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-tls-go/tls/v13/ephemeraltlsprivatekey"

ephemeraltlsprivatekey.NewEphemeralTlsPrivateKey(scope Construct, id *string, config EphemeralTlsPrivateKeyConfig) EphemeralTlsPrivateKey
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig">EphemeralTlsPrivateKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig">EphemeralTlsPrivateKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.resetEcdsaCurve">ResetEcdsaCurve</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.resetRsaBits">ResetRsaBits</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetEcdsaCurve` <a name="ResetEcdsaCurve" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.resetEcdsaCurve"></a>

```go
func ResetEcdsaCurve()
```

##### `ResetRsaBits` <a name="ResetRsaBits" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.resetRsaBits"></a>

```go
func ResetRsaBits()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-tls-go/tls/v13/ephemeraltlsprivatekey"

ephemeraltlsprivatekey.EphemeralTlsPrivateKey_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-tls-go/tls/v13/ephemeraltlsprivatekey"

ephemeraltlsprivatekey.EphemeralTlsPrivateKey_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isTerraformEphemeralResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-tls-go/tls/v13/ephemeraltlsprivatekey"

ephemeraltlsprivatekey.EphemeralTlsPrivateKey_IsTerraformEphemeralResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.privateKeyOpenssh">PrivateKeyOpenssh</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.privateKeyPem">PrivateKeyPem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.privateKeyPemPkcs8">PrivateKeyPemPkcs8</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyFingerprintMd5">PublicKeyFingerprintMd5</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyFingerprintSha256">PublicKeyFingerprintSha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyOpenssh">PublicKeyOpenssh</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyPem">PublicKeyPem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.algorithmInput">AlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.ecdsaCurveInput">EcdsaCurveInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.rsaBitsInput">RsaBitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.ecdsaCurve">EcdsaCurve</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.rsaBits">RsaBits</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.lifecycle"></a>

```go
func Lifecycle() TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `PrivateKeyOpenssh`<sup>Required</sup> <a name="PrivateKeyOpenssh" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.privateKeyOpenssh"></a>

```go
func PrivateKeyOpenssh() *string
```

- *Type:* *string

---

##### `PrivateKeyPem`<sup>Required</sup> <a name="PrivateKeyPem" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.privateKeyPem"></a>

```go
func PrivateKeyPem() *string
```

- *Type:* *string

---

##### `PrivateKeyPemPkcs8`<sup>Required</sup> <a name="PrivateKeyPemPkcs8" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.privateKeyPemPkcs8"></a>

```go
func PrivateKeyPemPkcs8() *string
```

- *Type:* *string

---

##### `PublicKeyFingerprintMd5`<sup>Required</sup> <a name="PublicKeyFingerprintMd5" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyFingerprintMd5"></a>

```go
func PublicKeyFingerprintMd5() *string
```

- *Type:* *string

---

##### `PublicKeyFingerprintSha256`<sup>Required</sup> <a name="PublicKeyFingerprintSha256" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyFingerprintSha256"></a>

```go
func PublicKeyFingerprintSha256() *string
```

- *Type:* *string

---

##### `PublicKeyOpenssh`<sup>Required</sup> <a name="PublicKeyOpenssh" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyOpenssh"></a>

```go
func PublicKeyOpenssh() *string
```

- *Type:* *string

---

##### `PublicKeyPem`<sup>Required</sup> <a name="PublicKeyPem" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyPem"></a>

```go
func PublicKeyPem() *string
```

- *Type:* *string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.algorithmInput"></a>

```go
func AlgorithmInput() *string
```

- *Type:* *string

---

##### `EcdsaCurveInput`<sup>Optional</sup> <a name="EcdsaCurveInput" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.ecdsaCurveInput"></a>

```go
func EcdsaCurveInput() *string
```

- *Type:* *string

---

##### `RsaBitsInput`<sup>Optional</sup> <a name="RsaBitsInput" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.rsaBitsInput"></a>

```go
func RsaBitsInput() *f64
```

- *Type:* *f64

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `EcdsaCurve`<sup>Required</sup> <a name="EcdsaCurve" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.ecdsaCurve"></a>

```go
func EcdsaCurve() *string
```

- *Type:* *string

---

##### `RsaBits`<sup>Required</sup> <a name="RsaBits" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.rsaBits"></a>

```go
func RsaBits() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralTlsPrivateKeyConfig <a name="EphemeralTlsPrivateKeyConfig" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-tls-go/tls/v13/ephemeraltlsprivatekey"

&ephemeraltlsprivatekey.EphemeralTlsPrivateKeyConfig {
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Algorithm: *string,
	EcdsaCurve: *string,
	RsaBits: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.algorithm">Algorithm</a></code> | <code>*string</code> | Name of the algorithm to use when generating the private key. Currently-supported values are: `RSA`, `ECDSA`, `ED25519`. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.ecdsaCurve">EcdsaCurve</a></code> | <code>*string</code> | When `algorithm` is `ECDSA`, the name of the elliptic curve to use. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.rsaBits">RsaBits</a></code> | <code>*f64</code> | When `algorithm` is `RSA`, the size of the generated RSA key, in bits (default: `2048`). |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformEphemeralResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.algorithm"></a>

```go
Algorithm *string
```

- *Type:* *string

Name of the algorithm to use when generating the private key. Currently-supported values are: `RSA`, `ECDSA`, `ED25519`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/ephemeral-resources/private_key#algorithm EphemeralTlsPrivateKey#algorithm}

---

##### `EcdsaCurve`<sup>Optional</sup> <a name="EcdsaCurve" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.ecdsaCurve"></a>

```go
EcdsaCurve *string
```

- *Type:* *string

When `algorithm` is `ECDSA`, the name of the elliptic curve to use.

Currently-supported values are: `P224`, `P256`, `P384`, `P521`. (default: `P224`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/ephemeral-resources/private_key#ecdsa_curve EphemeralTlsPrivateKey#ecdsa_curve}

---

##### `RsaBits`<sup>Optional</sup> <a name="RsaBits" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.rsaBits"></a>

```go
RsaBits *f64
```

- *Type:* *f64

When `algorithm` is `RSA`, the size of the generated RSA key, in bits (default: `2048`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/ephemeral-resources/private_key#rsa_bits EphemeralTlsPrivateKey#rsa_bits}

---



