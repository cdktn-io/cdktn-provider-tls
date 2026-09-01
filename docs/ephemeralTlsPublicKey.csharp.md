# `ephemeralTlsPublicKey` Submodule <a name="`ephemeralTlsPublicKey` Submodule" id="@cdktn/provider-tls.ephemeralTlsPublicKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralTlsPublicKey <a name="EphemeralTlsPublicKey" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.4.0/docs/ephemeral-resources/public_key tls_public_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Tls;

new EphemeralTlsPublicKey(Construct Scope, string Id, EphemeralTlsPublicKeyConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig">EphemeralTlsPublicKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetPrivateKeyOpenssh` <a name="ResetPrivateKeyOpenssh" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.resetPrivateKeyOpenssh"></a>

```csharp
private void ResetPrivateKeyOpenssh()
```

##### `ResetPrivateKeyPem` <a name="ResetPrivateKeyPem" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.resetPrivateKeyPem"></a>

```csharp
private void ResetPrivateKeyPem()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Tls;

EphemeralTlsPublicKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Tls;

EphemeralTlsPublicKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Tls;

EphemeralTlsPublicKey.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.publicKeyFingerprintMd5">PublicKeyFingerprintMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.publicKeyFingerprintSha256">PublicKeyFingerprintSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.publicKeyOpenssh">PublicKeyOpenssh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.publicKeyPem">PublicKeyPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.privateKeyOpensshInput">PrivateKeyOpensshInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.privateKeyPemInput">PrivateKeyPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.privateKeyOpenssh">PrivateKeyOpenssh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.privateKeyPem">PrivateKeyPem</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PublicKeyFingerprintMd5`<sup>Required</sup> <a name="PublicKeyFingerprintMd5" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.publicKeyFingerprintMd5"></a>

```csharp
public string PublicKeyFingerprintMd5 { get; }
```

- *Type:* string

---

##### `PublicKeyFingerprintSha256`<sup>Required</sup> <a name="PublicKeyFingerprintSha256" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.publicKeyFingerprintSha256"></a>

```csharp
public string PublicKeyFingerprintSha256 { get; }
```

- *Type:* string

---

##### `PublicKeyOpenssh`<sup>Required</sup> <a name="PublicKeyOpenssh" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.publicKeyOpenssh"></a>

```csharp
public string PublicKeyOpenssh { get; }
```

- *Type:* string

---

##### `PublicKeyPem`<sup>Required</sup> <a name="PublicKeyPem" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.publicKeyPem"></a>

```csharp
public string PublicKeyPem { get; }
```

- *Type:* string

---

##### `PrivateKeyOpensshInput`<sup>Optional</sup> <a name="PrivateKeyOpensshInput" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.privateKeyOpensshInput"></a>

```csharp
public string PrivateKeyOpensshInput { get; }
```

- *Type:* string

---

##### `PrivateKeyPemInput`<sup>Optional</sup> <a name="PrivateKeyPemInput" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.privateKeyPemInput"></a>

```csharp
public string PrivateKeyPemInput { get; }
```

- *Type:* string

---

##### `PrivateKeyOpenssh`<sup>Required</sup> <a name="PrivateKeyOpenssh" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.privateKeyOpenssh"></a>

```csharp
public string PrivateKeyOpenssh { get; }
```

- *Type:* string

---

##### `PrivateKeyPem`<sup>Required</sup> <a name="PrivateKeyPem" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.privateKeyPem"></a>

```csharp
public string PrivateKeyPem { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralTlsPublicKeyConfig <a name="EphemeralTlsPublicKeyConfig" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Tls;

new EphemeralTlsPublicKeyConfig {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    string PrivateKeyOpenssh = null,
    string PrivateKeyPem = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.privateKeyOpenssh">PrivateKeyOpenssh</a></code> | <code>string</code> | The private key (in  [OpenSSH PEM (RFC 4716)](https://datatracker.ietf.org/doc/html/rfc4716) format) to extract the public key from. This is _mutually exclusive_ with `private_key_pem`. Currently-supported algorithms for keys are: `RSA`, `ECDSA`, `ED25519`. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.privateKeyPem">PrivateKeyPem</a></code> | <code>string</code> | The private key (in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format) to extract the public key from. This is _mutually exclusive_ with `private_key_openssh`. Currently-supported algorithms for keys are: `RSA`, `ECDSA`, `ED25519`. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `PrivateKeyOpenssh`<sup>Optional</sup> <a name="PrivateKeyOpenssh" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.privateKeyOpenssh"></a>

```csharp
public string PrivateKeyOpenssh { get; set; }
```

- *Type:* string

The private key (in  [OpenSSH PEM (RFC 4716)](https://datatracker.ietf.org/doc/html/rfc4716) format) to extract the public key from. This is _mutually exclusive_ with `private_key_pem`. Currently-supported algorithms for keys are: `RSA`, `ECDSA`, `ED25519`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.4.0/docs/ephemeral-resources/public_key#private_key_openssh EphemeralTlsPublicKey#private_key_openssh}

---

##### `PrivateKeyPem`<sup>Optional</sup> <a name="PrivateKeyPem" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.privateKeyPem"></a>

```csharp
public string PrivateKeyPem { get; set; }
```

- *Type:* string

The private key (in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format) to extract the public key from. This is _mutually exclusive_ with `private_key_openssh`. Currently-supported algorithms for keys are: `RSA`, `ECDSA`, `ED25519`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.4.0/docs/ephemeral-resources/public_key#private_key_pem EphemeralTlsPublicKey#private_key_pem}

---



