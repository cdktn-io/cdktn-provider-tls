# `ephemeralTlsPrivateKey` Submodule <a name="`ephemeralTlsPrivateKey` Submodule" id="@cdktn/provider-tls.ephemeralTlsPrivateKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralTlsPrivateKey <a name="EphemeralTlsPrivateKey" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.4.0/docs/ephemeral-resources/private_key tls_private_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Tls;

new EphemeralTlsPrivateKey(Construct Scope, string Id, EphemeralTlsPrivateKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig">EphemeralTlsPrivateKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetEcdsaCurve` <a name="ResetEcdsaCurve" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.resetEcdsaCurve"></a>

```csharp
private void ResetEcdsaCurve()
```

##### `ResetRsaBits` <a name="ResetRsaBits" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.resetRsaBits"></a>

```csharp
private void ResetRsaBits()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Tls;

EphemeralTlsPrivateKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Tls;

EphemeralTlsPrivateKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Tls;

EphemeralTlsPrivateKey.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.privateKeyOpenssh">PrivateKeyOpenssh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.privateKeyPem">PrivateKeyPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.privateKeyPemPkcs8">PrivateKeyPemPkcs8</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyFingerprintMd5">PublicKeyFingerprintMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyFingerprintSha256">PublicKeyFingerprintSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyOpenssh">PublicKeyOpenssh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyPem">PublicKeyPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.algorithmInput">AlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.ecdsaCurveInput">EcdsaCurveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.rsaBitsInput">RsaBitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.ecdsaCurve">EcdsaCurve</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.rsaBits">RsaBits</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `PrivateKeyOpenssh`<sup>Required</sup> <a name="PrivateKeyOpenssh" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.privateKeyOpenssh"></a>

```csharp
public string PrivateKeyOpenssh { get; }
```

- *Type:* string

---

##### `PrivateKeyPem`<sup>Required</sup> <a name="PrivateKeyPem" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.privateKeyPem"></a>

```csharp
public string PrivateKeyPem { get; }
```

- *Type:* string

---

##### `PrivateKeyPemPkcs8`<sup>Required</sup> <a name="PrivateKeyPemPkcs8" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.privateKeyPemPkcs8"></a>

```csharp
public string PrivateKeyPemPkcs8 { get; }
```

- *Type:* string

---

##### `PublicKeyFingerprintMd5`<sup>Required</sup> <a name="PublicKeyFingerprintMd5" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyFingerprintMd5"></a>

```csharp
public string PublicKeyFingerprintMd5 { get; }
```

- *Type:* string

---

##### `PublicKeyFingerprintSha256`<sup>Required</sup> <a name="PublicKeyFingerprintSha256" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyFingerprintSha256"></a>

```csharp
public string PublicKeyFingerprintSha256 { get; }
```

- *Type:* string

---

##### `PublicKeyOpenssh`<sup>Required</sup> <a name="PublicKeyOpenssh" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyOpenssh"></a>

```csharp
public string PublicKeyOpenssh { get; }
```

- *Type:* string

---

##### `PublicKeyPem`<sup>Required</sup> <a name="PublicKeyPem" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyPem"></a>

```csharp
public string PublicKeyPem { get; }
```

- *Type:* string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.algorithmInput"></a>

```csharp
public string AlgorithmInput { get; }
```

- *Type:* string

---

##### `EcdsaCurveInput`<sup>Optional</sup> <a name="EcdsaCurveInput" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.ecdsaCurveInput"></a>

```csharp
public string EcdsaCurveInput { get; }
```

- *Type:* string

---

##### `RsaBitsInput`<sup>Optional</sup> <a name="RsaBitsInput" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.rsaBitsInput"></a>

```csharp
public double RsaBitsInput { get; }
```

- *Type:* double

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `EcdsaCurve`<sup>Required</sup> <a name="EcdsaCurve" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.ecdsaCurve"></a>

```csharp
public string EcdsaCurve { get; }
```

- *Type:* string

---

##### `RsaBits`<sup>Required</sup> <a name="RsaBits" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.rsaBits"></a>

```csharp
public double RsaBits { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralTlsPrivateKeyConfig <a name="EphemeralTlsPrivateKeyConfig" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Tls;

new EphemeralTlsPrivateKeyConfig {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    string Algorithm,
    string EcdsaCurve = null,
    double RsaBits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.algorithm">Algorithm</a></code> | <code>string</code> | Name of the algorithm to use when generating the private key. Currently-supported values are: `RSA`, `ECDSA`, `ED25519`. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.ecdsaCurve">EcdsaCurve</a></code> | <code>string</code> | When `algorithm` is `ECDSA`, the name of the elliptic curve to use. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.rsaBits">RsaBits</a></code> | <code>double</code> | When `algorithm` is `RSA`, the size of the generated RSA key, in bits (default: `2048`). |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.algorithm"></a>

```csharp
public string Algorithm { get; set; }
```

- *Type:* string

Name of the algorithm to use when generating the private key. Currently-supported values are: `RSA`, `ECDSA`, `ED25519`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.4.0/docs/ephemeral-resources/private_key#algorithm EphemeralTlsPrivateKey#algorithm}

---

##### `EcdsaCurve`<sup>Optional</sup> <a name="EcdsaCurve" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.ecdsaCurve"></a>

```csharp
public string EcdsaCurve { get; set; }
```

- *Type:* string

When `algorithm` is `ECDSA`, the name of the elliptic curve to use.

Currently-supported values are: `P224`, `P256`, `P384`, `P521`. (default: `P224`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.4.0/docs/ephemeral-resources/private_key#ecdsa_curve EphemeralTlsPrivateKey#ecdsa_curve}

---

##### `RsaBits`<sup>Optional</sup> <a name="RsaBits" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.rsaBits"></a>

```csharp
public double RsaBits { get; set; }
```

- *Type:* double

When `algorithm` is `RSA`, the size of the generated RSA key, in bits (default: `2048`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.4.0/docs/ephemeral-resources/private_key#rsa_bits EphemeralTlsPrivateKey#rsa_bits}

---



