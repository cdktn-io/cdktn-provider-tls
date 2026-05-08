# `locallySignedCert` Submodule <a name="`locallySignedCert` Submodule" id="@cdktn/provider-tls.locallySignedCert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LocallySignedCert <a name="LocallySignedCert" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.2.1/docs/resources/locally_signed_cert tls_locally_signed_cert}.

#### Initializers <a name="Initializers" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Tls;

new LocallySignedCert(Construct Scope, string Id, LocallySignedCertConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig">LocallySignedCertConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig">LocallySignedCertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.resetEarlyRenewalHours">ResetEarlyRenewalHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.resetIsCaCertificate">ResetIsCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.resetMaxPathLength">ResetMaxPathLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.resetSetSubjectKeyId">ResetSetSubjectKeyId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEarlyRenewalHours` <a name="ResetEarlyRenewalHours" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.resetEarlyRenewalHours"></a>

```csharp
private void ResetEarlyRenewalHours()
```

##### `ResetIsCaCertificate` <a name="ResetIsCaCertificate" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.resetIsCaCertificate"></a>

```csharp
private void ResetIsCaCertificate()
```

##### `ResetMaxPathLength` <a name="ResetMaxPathLength" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.resetMaxPathLength"></a>

```csharp
private void ResetMaxPathLength()
```

##### `ResetSetSubjectKeyId` <a name="ResetSetSubjectKeyId" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.resetSetSubjectKeyId"></a>

```csharp
private void ResetSetSubjectKeyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LocallySignedCert resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Tls;

LocallySignedCert.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Tls;

LocallySignedCert.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Tls;

LocallySignedCert.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Tls;

LocallySignedCert.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LocallySignedCert resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LocallySignedCert to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LocallySignedCert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tls/4.2.1/docs/resources/locally_signed_cert#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LocallySignedCert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.caKeyAlgorithm">CaKeyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.certPem">CertPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.readyForRenewal">ReadyForRenewal</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.validityEndTime">ValidityEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.validityStartTime">ValidityStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.allowedUsesInput">AllowedUsesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.caCertPemInput">CaCertPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.caPrivateKeyPemInput">CaPrivateKeyPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.certRequestPemInput">CertRequestPemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.earlyRenewalHoursInput">EarlyRenewalHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.isCaCertificateInput">IsCaCertificateInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.maxPathLengthInput">MaxPathLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.setSubjectKeyIdInput">SetSubjectKeyIdInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.validityPeriodHoursInput">ValidityPeriodHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.allowedUses">AllowedUses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.caCertPem">CaCertPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.caPrivateKeyPem">CaPrivateKeyPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.certRequestPem">CertRequestPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.earlyRenewalHours">EarlyRenewalHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.isCaCertificate">IsCaCertificate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.maxPathLength">MaxPathLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.setSubjectKeyId">SetSubjectKeyId</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.validityPeriodHours">ValidityPeriodHours</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CaKeyAlgorithm`<sup>Required</sup> <a name="CaKeyAlgorithm" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.caKeyAlgorithm"></a>

```csharp
public string CaKeyAlgorithm { get; }
```

- *Type:* string

---

##### `CertPem`<sup>Required</sup> <a name="CertPem" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.certPem"></a>

```csharp
public string CertPem { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ReadyForRenewal`<sup>Required</sup> <a name="ReadyForRenewal" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.readyForRenewal"></a>

```csharp
public IResolvable ReadyForRenewal { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ValidityEndTime`<sup>Required</sup> <a name="ValidityEndTime" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.validityEndTime"></a>

```csharp
public string ValidityEndTime { get; }
```

- *Type:* string

---

##### `ValidityStartTime`<sup>Required</sup> <a name="ValidityStartTime" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.validityStartTime"></a>

```csharp
public string ValidityStartTime { get; }
```

- *Type:* string

---

##### `AllowedUsesInput`<sup>Optional</sup> <a name="AllowedUsesInput" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.allowedUsesInput"></a>

```csharp
public string[] AllowedUsesInput { get; }
```

- *Type:* string[]

---

##### `CaCertPemInput`<sup>Optional</sup> <a name="CaCertPemInput" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.caCertPemInput"></a>

```csharp
public string CaCertPemInput { get; }
```

- *Type:* string

---

##### `CaPrivateKeyPemInput`<sup>Optional</sup> <a name="CaPrivateKeyPemInput" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.caPrivateKeyPemInput"></a>

```csharp
public string CaPrivateKeyPemInput { get; }
```

- *Type:* string

---

##### `CertRequestPemInput`<sup>Optional</sup> <a name="CertRequestPemInput" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.certRequestPemInput"></a>

```csharp
public string CertRequestPemInput { get; }
```

- *Type:* string

---

##### `EarlyRenewalHoursInput`<sup>Optional</sup> <a name="EarlyRenewalHoursInput" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.earlyRenewalHoursInput"></a>

```csharp
public double EarlyRenewalHoursInput { get; }
```

- *Type:* double

---

##### `IsCaCertificateInput`<sup>Optional</sup> <a name="IsCaCertificateInput" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.isCaCertificateInput"></a>

```csharp
public bool|IResolvable IsCaCertificateInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxPathLengthInput`<sup>Optional</sup> <a name="MaxPathLengthInput" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.maxPathLengthInput"></a>

```csharp
public double MaxPathLengthInput { get; }
```

- *Type:* double

---

##### `SetSubjectKeyIdInput`<sup>Optional</sup> <a name="SetSubjectKeyIdInput" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.setSubjectKeyIdInput"></a>

```csharp
public bool|IResolvable SetSubjectKeyIdInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ValidityPeriodHoursInput`<sup>Optional</sup> <a name="ValidityPeriodHoursInput" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.validityPeriodHoursInput"></a>

```csharp
public double ValidityPeriodHoursInput { get; }
```

- *Type:* double

---

##### `AllowedUses`<sup>Required</sup> <a name="AllowedUses" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.allowedUses"></a>

```csharp
public string[] AllowedUses { get; }
```

- *Type:* string[]

---

##### `CaCertPem`<sup>Required</sup> <a name="CaCertPem" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.caCertPem"></a>

```csharp
public string CaCertPem { get; }
```

- *Type:* string

---

##### `CaPrivateKeyPem`<sup>Required</sup> <a name="CaPrivateKeyPem" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.caPrivateKeyPem"></a>

```csharp
public string CaPrivateKeyPem { get; }
```

- *Type:* string

---

##### `CertRequestPem`<sup>Required</sup> <a name="CertRequestPem" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.certRequestPem"></a>

```csharp
public string CertRequestPem { get; }
```

- *Type:* string

---

##### `EarlyRenewalHours`<sup>Required</sup> <a name="EarlyRenewalHours" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.earlyRenewalHours"></a>

```csharp
public double EarlyRenewalHours { get; }
```

- *Type:* double

---

##### `IsCaCertificate`<sup>Required</sup> <a name="IsCaCertificate" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.isCaCertificate"></a>

```csharp
public bool|IResolvable IsCaCertificate { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxPathLength`<sup>Required</sup> <a name="MaxPathLength" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.maxPathLength"></a>

```csharp
public double MaxPathLength { get; }
```

- *Type:* double

---

##### `SetSubjectKeyId`<sup>Required</sup> <a name="SetSubjectKeyId" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.setSubjectKeyId"></a>

```csharp
public bool|IResolvable SetSubjectKeyId { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ValidityPeriodHours`<sup>Required</sup> <a name="ValidityPeriodHours" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.validityPeriodHours"></a>

```csharp
public double ValidityPeriodHours { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCert.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LocallySignedCertConfig <a name="LocallySignedCertConfig" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Tls;

new LocallySignedCertConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] AllowedUses,
    string CaCertPem,
    string CaPrivateKeyPem,
    string CertRequestPem,
    double ValidityPeriodHours,
    double EarlyRenewalHours = null,
    bool|IResolvable IsCaCertificate = null,
    double MaxPathLength = null,
    bool|IResolvable SetSubjectKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.allowedUses">AllowedUses</a></code> | <code>string[]</code> | List of key usages allowed for the issued certificate. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.caCertPem">CaCertPem</a></code> | <code>string</code> | Certificate data of the Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.caPrivateKeyPem">CaPrivateKeyPem</a></code> | <code>string</code> | Private key of the Certificate Authority (CA) used to sign the certificate, in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.certRequestPem">CertRequestPem</a></code> | <code>string</code> | Certificate request data in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.validityPeriodHours">ValidityPeriodHours</a></code> | <code>double</code> | Number of hours, after initial issuing, that the certificate will remain valid for. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.earlyRenewalHours">EarlyRenewalHours</a></code> | <code>double</code> | The resource will consider the certificate to have expired the given number of hours before its actual expiry time. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.isCaCertificate">IsCaCertificate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Is the generated certificate representing a Certificate Authority (CA) (default: `false`). |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.maxPathLength">MaxPathLength</a></code> | <code>double</code> | Maximum number of intermediate certificates that may follow this certificate in a valid certification path. |
| <code><a href="#@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.setSubjectKeyId">SetSubjectKeyId</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AllowedUses`<sup>Required</sup> <a name="AllowedUses" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.allowedUses"></a>

```csharp
public string[] AllowedUses { get; set; }
```

- *Type:* string[]

List of key usages allowed for the issued certificate.

Values are defined in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280) and combine flags defined by both [Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.3) and [Extended Key Usages](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12). Accepted values: `any_extended`, `cert_signing`, `client_auth`, `code_signing`, `content_commitment`, `crl_signing`, `data_encipherment`, `decipher_only`, `digital_signature`, `email_protection`, `encipher_only`, `ipsec_end_system`, `ipsec_tunnel`, `ipsec_user`, `key_agreement`, `key_encipherment`, `microsoft_commercial_code_signing`, `microsoft_kernel_code_signing`, `microsoft_server_gated_crypto`, `netscape_server_gated_crypto`, `ocsp_signing`, `server_auth`, `timestamping`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.2.1/docs/resources/locally_signed_cert#allowed_uses LocallySignedCert#allowed_uses}

---

##### `CaCertPem`<sup>Required</sup> <a name="CaCertPem" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.caCertPem"></a>

```csharp
public string CaCertPem { get; set; }
```

- *Type:* string

Certificate data of the Certificate Authority (CA) in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.2.1/docs/resources/locally_signed_cert#ca_cert_pem LocallySignedCert#ca_cert_pem}

---

##### `CaPrivateKeyPem`<sup>Required</sup> <a name="CaPrivateKeyPem" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.caPrivateKeyPem"></a>

```csharp
public string CaPrivateKeyPem { get; set; }
```

- *Type:* string

Private key of the Certificate Authority (CA) used to sign the certificate, in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.2.1/docs/resources/locally_signed_cert#ca_private_key_pem LocallySignedCert#ca_private_key_pem}

---

##### `CertRequestPem`<sup>Required</sup> <a name="CertRequestPem" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.certRequestPem"></a>

```csharp
public string CertRequestPem { get; set; }
```

- *Type:* string

Certificate request data in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.2.1/docs/resources/locally_signed_cert#cert_request_pem LocallySignedCert#cert_request_pem}

---

##### `ValidityPeriodHours`<sup>Required</sup> <a name="ValidityPeriodHours" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.validityPeriodHours"></a>

```csharp
public double ValidityPeriodHours { get; set; }
```

- *Type:* double

Number of hours, after initial issuing, that the certificate will remain valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.2.1/docs/resources/locally_signed_cert#validity_period_hours LocallySignedCert#validity_period_hours}

---

##### `EarlyRenewalHours`<sup>Optional</sup> <a name="EarlyRenewalHours" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.earlyRenewalHours"></a>

```csharp
public double EarlyRenewalHours { get; set; }
```

- *Type:* double

The resource will consider the certificate to have expired the given number of hours before its actual expiry time.

This can be useful to deploy an updated certificate in advance of the expiration of the current certificate. However, the old certificate remains valid until its true expiration time, since this resource does not (and cannot) support certificate revocation. Also, this advance update can only be performed should the Terraform configuration be applied during the early renewal period. (default: `0`)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.2.1/docs/resources/locally_signed_cert#early_renewal_hours LocallySignedCert#early_renewal_hours}

---

##### `IsCaCertificate`<sup>Optional</sup> <a name="IsCaCertificate" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.isCaCertificate"></a>

```csharp
public bool|IResolvable IsCaCertificate { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Is the generated certificate representing a Certificate Authority (CA) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.2.1/docs/resources/locally_signed_cert#is_ca_certificate LocallySignedCert#is_ca_certificate}

---

##### `MaxPathLength`<sup>Optional</sup> <a name="MaxPathLength" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.maxPathLength"></a>

```csharp
public double MaxPathLength { get; set; }
```

- *Type:* double

Maximum number of intermediate certificates that may follow this certificate in a valid certification path.

If `is_ca_certificate` is `false`, this value is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.2.1/docs/resources/locally_signed_cert#max_path_length LocallySignedCert#max_path_length}

---

##### `SetSubjectKeyId`<sup>Optional</sup> <a name="SetSubjectKeyId" id="@cdktn/provider-tls.locallySignedCert.LocallySignedCertConfig.property.setSubjectKeyId"></a>

```csharp
public bool|IResolvable SetSubjectKeyId { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Should the generated certificate include a [subject key identifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.2) (default: `false`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.2.1/docs/resources/locally_signed_cert#set_subject_key_id LocallySignedCert#set_subject_key_id}

---



